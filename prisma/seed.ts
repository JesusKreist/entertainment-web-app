import { PrismaClient } from "@prisma/client";
import { allShows } from "../src/data/data";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const generateUser = async () => {
  const fullName = faker.name.fullName();
  await prisma.user.create({
    data: {
      name: fullName,
      email: `${fullName}@mailforspam.com`,
    },
  });
};

const generateShows = async () => {
  for (let i = 0; i < allShows.length; i++) {
    const data = allShows[i];

    await prisma.show.create({
      data: data,
    });
  }
};

const addShowsToUser = async () => {
  const user = await prisma.user.findFirst();
  if (!user) {
    throw new Error("No user found");
  }

  const shows = await prisma.show.findMany();

  await prisma.userBookmarks.create({
    data: {
      userId: user.id,
      showId: shows[4].id,
    },
  });
};

const main = async () => {
  //   generateShows().then(() => console.log("Done"));

  addShowsToUser().then(() => console.log("Done"));
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
