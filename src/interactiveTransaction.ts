import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    const getAllPost = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    const countUser = await transactionClient.user.count();

    const updateUser = await transactionClient.user.update({
      where: {
        id: 7,
      },
      data: {
        age: 18,
      },
    });
    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });
  console.log(result);
};

interactiveTransaction();
