import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { generateDiceBearAvataars, hashPassword } from "./databaseFunctions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { email, password, passwordConfirmation, csrfToken } = req.body;

      if (
        !(email && password && passwordConfirmation && password.length >= 5)
      ) {
        res.status(400).json({
          message: "Invalid user parameters",
        });
        break;
      }

      if (password != passwordConfirmation) {
        res.status(400).json({
          message: "Password mismatch",
        });
        break;
      }

      const profileExists = await prisma.user.findMany({
        where: {
          email: email,
        },
      });

      if (
        profileExists &&
        Array.isArray(profileExists) &&
        profileExists.length > 0
      ) {
        res.status(403).json({
          message: "User already exists",
        });
        break;
      }

      const passwordHash = await hashPassword(password);
      const image = generateDiceBearAvataars();

      const user = await prisma.user.create({
        data: {
          email,
          passwordHash,
          image,
        },
      });

      if (!user) {
        res.status(500).json({
          message: "Unable to create user account",
        });
      }

      const account = await prisma.account.create({
        data: {
          userId: user.id,
          type: "credentials",
          provider: "credentials",
          providerAccountId: user.id,
        },
      });

      if (user && account) {
        res.status(200).json({
          id: user.id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(500).json({
          message: "Unable to link account to created user profile",
        });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({
        message: `Method ${req.method} Not Allowed`,
      });
  }
}
