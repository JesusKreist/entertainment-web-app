import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

type AddBookmarkBody = {
  showId: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const sessionToken = req.cookies["next-auth.session-token"];

      if (!sessionToken) {
        res.status(403).json({
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

      try {
        const allShows = await prisma.userBookmarks.findMany({
          where: { userId: session.userId },
          select: { show: true },
        });

        // await setTimeout(() => {}, 1000);
        // res.status(200).json(allShows);

        // await new Promise((resolve) => {
        //   return setTimeout(resolve, 5000);
        // });
        res.status(200).json(allShows);
        // console.log("Waiting for 5 seconds...");
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting all bookmarks" });
      }

      break;
    }
    case "POST": {
      const { showId } = req.body as AddBookmarkBody;
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
        res.status(403).json({
          message: "Show does not exist",
        });
        break;
      }

      const bookmarkExists = await prisma.userBookmarks.findFirst({
        where: { showId: showId, userId: session.userId },
      });

      if (bookmarkExists) {
        res.status(403).json({
          message: "Bookmark already exists",
        });
        break;
      }

      try {
        const bookmark = await prisma.userBookmarks.create({
          data: { showId, userId: session.userId },
        });
        res.status(200).json(bookmark);
        break;
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Unable to create bookmark",
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
