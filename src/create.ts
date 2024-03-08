import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createData = async() => {

    // create single data
    const result = await prisma.post.create({
        data: {
            title: 'Title many',
            content: "content many",
            authorName: 'EMon many'
        }
    })
    
    // create multiple
    const createMany = await prisma.post.createMany({
        data: [
            {
                title: 'title 1',
                content: "content 1",
                authorName: 'Emon 1'
            },
            {
                title: 'title 3',
                content: "content 3",
                authorName: 'Emon 3'
            },
            {
                title: 'title 4',
                content: "content 4",
                authorName: 'Emon 4'
            },
            {
                title: 'title 5',
                content: "content 5",
                authorName: 'Emon 5'
            },
            {
                title: 'title 6',
                content: "content 6",
                authorName: 'Emon 6'
            },
            {
                title: 'title 7',
                content: "content 7",
                authorName: 'Emon 7'
            }
        ]
    })
    
    console.log(createMany);
}

createData()