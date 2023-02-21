import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const allShows = await prisma.show.findMany();
        return res.json(allShows);
      } catch (error) {
        console.log(error);
        return res.json({ message: "Error getting all shows" });
      }

    // res.json({ message: "This is all the shows!" });

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({
        message: `Method ${req.method} Not Allowed`,
      });
  }
}
