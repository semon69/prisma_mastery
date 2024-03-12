import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const createData = async () => {
  // create single data
//   const createPost = await prisma.post.create({
//     data: {
//       title: "Title many 5",
//       content: "content many 5",
//       authorId: 4,
//       PostCategory: {
//         // create single post category
//         create: {
//           // category: {
//           //     connect: {
//           //         id: 1
//           //     }
//           // }
//           categoryId: 4,
//         },

//         // create multiple post categories
//         // create: [
//         //     {
//         //         categoryId: 1
//         //     },
//         //     {
//         //         categoryId: 2
//         //     },
//         //     {
//         //         categoryId: 3
//         //     }

//         // ]
//       },
//     },
//     // include: {
//     //   PostCategory: true,
//     // },
//   });

  // create multiple
  // const createMany = await prisma.post.createMany({
  //     data: [
  //         {
  //             title: 'title 1',
  //             content: "content 1",
  //             authorName: 'Emon 1'
  //         },
  //         {
  //             title: 'title 3',
  //             content: "content 3",
  //             authorName: 'Emon 3'
  //         },
  //         {
  //             title: 'title 4',
  //             content: "content 4",
  //             authorName: 'Emon 4'
  //         },
  //         {
  //             title: 'title 5',
  //             content: "content 5",
  //             authorName: 'Emon 5'
  //         },
  //         {
  //             title: 'title 6',
  //             content: "content 6",
  //             authorName: 'Emon 6'
  //         },
  //         {
  //             title: 'title 7',
  //             content: "content 7",
  //             authorName: 'Emon 7'
  //         }
  //     ]
  // })

//   const createUser = await prisma.user.create({
//       data: {
//           userName: 'user4',
//           email: 'user4@gmail.com',
//           role: UserRole.user
//       }
//   })

//   const createProfile = await prisma.profile.create({
//       data: {
//           bio: "This is bio 4",
//           userId: 4
//       }
//   })

  // const createCategory = await prisma.category.create({
  //     data: {
  //         name: "TS"
  //     }
  // })

  console.log();
};

createData();
