import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Title",
          }
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Title",
          }
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "Title",
          }
        }
      ],
    },
  });

  const startWith = await prisma.post.findMany({
    where: {
        title: {
            startsWith: "Ramadan" // endsWith, contains, equals
        }
    }
  })

  console.log(startWith);
};

filtering();
