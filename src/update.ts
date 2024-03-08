import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateData = async () => {
  // const update = await prisma.post.update({
  //    where: {
  //       id: 15
  //    },
  //    data: {
  //       title: 'Title 4'
  //    }
  // })

  // const updateMany = await prisma.post.updateMany({
  //    where: {
  //       title: 'titile 1'
  //    },
  //    data: {
  //       published: true
  //    }
  // })

  const upsertData = await prisma.post.upsert({
    where: {
      id: 29,
    },
    update: {
      authorName: "Kabir 5",
    },
    create: {
      title: "title 5",
      content: "content 5",
    },
  });
  console.log(upsertData);

};

updateData();
