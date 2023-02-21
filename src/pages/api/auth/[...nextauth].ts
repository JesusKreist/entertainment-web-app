// pages/api/auth/[...nextauth].ts

import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/prisma";
import {
  checkIfUserExists,
  comparePassword,
  fromDate,
  generateSessionToken,
} from "./databaseFunctions";
import { setCookie, getCookie } from "cookies-next";
import { encode, decode } from "next-auth/jwt";

export const authOptions = (
  req: NextApiRequest,
  res: NextApiResponse
): NextAuthOptions => {
  const adapter = PrismaAdapter(prisma);

  return {
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: {
            label: "email",
            type: "text",
            placeholder: "jsmith",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          // console.log("credentials :>>", credentials);
          // console.log("####################################################");
          // console.log("req :>>", req);

          // return null;
          if (!credentials || !credentials.email || !credentials.password) {
            throw new Error("Missing login parameters");
          }

          const user = await checkIfUserExists(credentials.email);
          if (!user || !user.passwordHash) {
            throw new Error("Invalid login parameters");
          }
          // console.log("user :>>", user);

          const isPasswordCorrect = await comparePassword(
            credentials.password,
            user.passwordHash
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid login parameters");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
    adapter: adapter,
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async signIn({ user }) {
        // Check if this sign in callback is being called in the credentials authentication flow. If so, use the next-auth adapter to create a session entry in the database (SignIn is called after authorize so we can safely assume the user is valid and already authenticated).
        if (
          req.query.nextauth?.includes("callback") &&
          req.query.nextauth.includes("credentials") &&
          req.method === "POST"
        ) {
          if (user) {
            const sessionToken = generateSessionToken();
            const sessionMaxAge = 60 * 60 * 24 * 30; //30Days
            const sessionExpiry = fromDate(sessionMaxAge);

            await adapter.createSession({
              sessionToken: sessionToken,
              userId: user.id,
              expires: sessionExpiry,
            });

            setCookie("next-auth.session-token", sessionToken, {
              expires: sessionExpiry,
              req: req,
              res: res,
            });
          }
        }

        return true;
      },
    },
    jwt: {
      encode: async ({ token, secret, maxAge }) => {
        if (
          req.query.nextauth?.includes("callback") &&
          req.query.nextauth?.includes("credentials") &&
          req.method === "POST"
        ) {
          const cookie = getCookie("next-auth.session-token", {
            req: req,
          }) as string;

          if (cookie) return cookie;
          else return "";
        }
        // Revert to default behaviour when not in the credentials provider callback flow
        return encode({ token, secret, maxAge });
      },
      decode: async ({ token, secret }) => {
        if (
          req.query.nextauth?.includes("callback") &&
          req.query.nextauth.includes("credentials") &&
          req.method === "POST"
        ) {
          return null;
        }

        // Revert to default behaviour when not in the credentials provider callback flow
        return decode({ token, secret });
      },
    },
  };
};

const authHandler: NextApiHandler = async (req, res) => {
  return await NextAuth(req, res, authOptions(req, res));
};
export default authHandler;
