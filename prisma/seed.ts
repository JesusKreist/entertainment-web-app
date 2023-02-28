import { generateDiceBearAvataars } from "../src/pages/api/auth/databaseFunctions";
import prisma from "../lib/prisma";

const updateAllUsersAvatars = async () => {
  const users = await prisma.user.findMany();
  users.forEach(async (user) => {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        image: generateDiceBearAvataars(),
      },
    });
  });
};

const main = async () => {
  //   generateShows().then(() => console.log("Done"));
  updateAllUsersAvatars().then(() => console.log("Done"));
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
