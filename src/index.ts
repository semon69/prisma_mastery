import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async() => {
    const result = await prisma.post.create({
        data: {
            title: 'Ttitle 2',
            content: "content 2",
            authorName: 'EMon 2'
        }
    })
   const get = await prisma.post.findMany();
}

main()