import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
//   const offsetData = await prisma.post.findMany({
//     skip: 5,
//     take: 4
//   });
//   console.log(offsetData);

// const cursorData = await prisma.post.findMany({
//     skip: 5,
//     take: 4,
//     cursor: {
//         id: 40
//     }
//   });
//   console.log(cursorData);


const sorting = await prisma.post.findMany({
   orderBy: {
    title: 'asc'
   }
  });
  console.log(sorting);

};

paginationSorting();
