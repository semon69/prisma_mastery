import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupData = await prisma.post.groupBy({
    by: ["published"],
    _count: true,
    having: {
        authorId: {
            _sum: {
                lt: 8
            }
        }
    }
  });

  console.log(groupData);
};

groupBy();
