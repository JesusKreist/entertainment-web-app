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
        return res.status(500).json({ message: "Error getting all shows" });
        
      }


    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({
        message: `Method ${req.method} Not Allowed`,
      });
  }
}
