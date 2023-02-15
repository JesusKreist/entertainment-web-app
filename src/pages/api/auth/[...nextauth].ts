// pages/api/auth/[...nextauth].ts

import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/prisma";
import { checkIfUserExists, comparePassword } from "./databaseFunctions";

const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials :>>", credentials);
        console.log("####################################################");
        console.log("req :>>", req);

        return null;
        // if (!credentials || !credentials.username || !credentials.password) {
        //   return null;
        // }

        // const user = await checkIfUserExists(credentials.username);
        // if (!user || !user.passwordHash) {
        //   return null;
        // }

        // const isPasswordCorrect = await comparePassword(
        //   credentials.password,
        //   user.passwordHash
        // );

        // if (!isPasswordCorrect) {
        //   return null;
        // }

        // return {
        //   id: user.id,
        //   name: user.name,
        //   email: user.email,
        // };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
