import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });

  //   relational queries
  const publishedPost = await prisma.user.findMany({
    include: {
      post: {
        where: {
            published: true
        }
      }
    },
  });

  console.dir(publishedPost, {depth: Infinity});
};

relationalQueries();
