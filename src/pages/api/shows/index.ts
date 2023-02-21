import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

type ListAllShowsQuery = {
  category: "Movie" | "TV Series" | null;
  isTrending: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const { category, isTrending } =
        req.query as unknown as ListAllShowsQuery;

      try {
        if (category) {
          const showsInCategory = await prisma.show.findMany({
            where: { category },
          });
          res.status(200).json(showsInCategory);
          break;
        }

        if (isTrending) {
          const trendingShows = await prisma.show.findMany({
            where: { isTrending: isTrending.toLowerCase() === "true" },
          });
          res.status(200).json(trendingShows);
          break;
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error getting all shows" });
      }
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({
        message: `Method ${req.method} Not Allowed`,
      });
  }
}
