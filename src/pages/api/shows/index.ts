import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

type ListAllShowsQuery = {
  category: "Movie" | "TV Series" | null;
  isTrending: string | null;
  isBookmarked: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const { category, isTrending, isBookmarked } =
        req.query as unknown as ListAllShowsQuery;
      const sessionToken = req.cookies["next-auth.session-token"];
      try {
        let shows = await prisma.show.findMany();

        if (category) {
          shows = shows.filter((show) => show.category === category);
        }

        if (isTrending) {
          shows = shows.filter(
            (show) => show.isTrending === (isTrending.toLowerCase() === "true")
          );
        }

        if (!sessionToken && isBookmarked) {
          res.status(403).json({
            message: "Invalid user parameters",
          });
          break;
        }

        if (!sessionToken) {
          res.status(200).json(shows);
          break;
        }

        const session = await prisma.session.findUnique({
          where: { sessionToken },
        });

        if (!session && isBookmarked) {
          res.status(403).json({
            message: "Invalid user parameters",
          });
          break;
        }

        if (!session) {
          res.status(200).json(shows);
          break;
        }

        const user = await prisma.user.findUnique({
          where: { id: session.userId },
        });

        if (!user) {
          res.status(200).json(shows);
          break;
        }

        const userBookmarks = await prisma.user.findUnique({
          where: { id: user.id },
          select: {
            bookmarkedShows: {
              select: {
                showId: true,
              },
            },
          },
        });

        const showsWithAddedBookmarks = shows.map((show) => {
          const bookmark = userBookmarks?.bookmarkedShows.find(
            (bookmark) => bookmark.showId === show.id
          );
          return { ...show, isBookmarked: bookmark ? true : false };
        });

        if (isBookmarked && isBookmarked.toLowerCase() === "true") {
          return res
            .status(200)
            .json(showsWithAddedBookmarks.filter((show) => show.isBookmarked));
        }

        return res.status(200).json(showsWithAddedBookmarks);
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
