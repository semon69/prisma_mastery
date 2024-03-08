import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findData = async () => {
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where: {
    //         published: false
    //     }
    // })
    const findUnique = await prisma.post.findUnique({
        where: {
            id: 15
        }
    })
    console.log(findUnique);
};

findData();