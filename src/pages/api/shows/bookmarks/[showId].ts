import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/prisma";

type DeleteBookmarkQuery = {
  showId: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE": {
      const { showId } = req.query as unknown as DeleteBookmarkQuery;
      const sessionToken = req.cookies["next-auth.session-token"];

      if (!(showId && sessionToken)) {
        res.status(400).json({
          message: "Invalid user parameters",
        });
        break;
      }

      const session = await prisma.session.findFirst({
        where: { sessionToken },
      });

      if (!session) {
        res.status(403).json({
          message: "Unauthenticated user",
        });
        break;
      }

      const showExists = await prisma.show.findFirst({
        where: { id: showId },
      });
      if (!showExists) {
        res.status(404).json({
          message: "Show does not exist",
        });
        break;
      }

      const bookmarkExists = await prisma.userBookmarks.findFirst({
        where: { showId: showId, userId: session.userId },
      });

      if (!bookmarkExists) {
        res.status(404).json({
          message: "Bookmark doesn't exist",
        });
        break;
      }

      try {
        await prisma.userBookmarks.delete({
          where: { showId_userId: { userId: session.userId, showId: showId } },
        });

        res.status(204).end();
        break;
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Unable to delete bookmark",
        });
      }
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({
        message: `Method ${req.method} Not Allowed`,
      });
  }
}
