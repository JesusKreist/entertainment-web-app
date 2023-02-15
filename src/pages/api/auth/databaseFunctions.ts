import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

export const checkIfUserExists = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  return user;
};

export const hashPassword = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);

  return hash;
};

export const comparePassword = async (
  password: string,
  passwordHash: string
) => {
  const isMatch = await bcryptjs.compare(password, passwordHash);

  return isMatch;
};
