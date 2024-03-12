import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Title",
          },
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
          },
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
          },
        },
      ],
    },
  });

  const startWith = await prisma.post.findMany({
    where: {
      title: {
        startsWith: "Ramadan", // endsWith, contains, equals
      },
    },
  });

  const userArray = ["user1", "user2",  "user3", "user4"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
        userName: {
            in: userArray
        }
    }
  })


  const inDepthFiltering = await prisma.user.findUnique({
    where: {
        id: 1
    },
    include: {
        post: {
            include: {
                PostCategory: {
                    include: {
                        category: true,
                    }
                }
            }
        }
    }
  })

  console.dir(inDepthFiltering, {depth: Infinity});
};

filtering();
