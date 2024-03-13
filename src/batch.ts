import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchQuery = async () => {
  const createUser = prisma.user.create({
    data: {
      userName: "aj123",
      email: "aj@gm.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 5,
    },
    data: {
      age: 44,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser
  ])

  console.log(userData, updateData);
};

batchQuery();
