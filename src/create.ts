import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createData = async() => {

    // create single data
    const result = await prisma.post.create({
        data: {
            title: 'Ttitle 2',
            content: "content 2",
            authorName: 'EMon 2'
        }
    })
    
    // create multiple
    const createMany = await prisma.post.createMany({
        data: [
            {
                title: 'titile 1',
                content: "content 1",
                authorName: 'Emon 1'
            },
            {
                title: 'titile 3',
                content: "content 3",
                authorName: 'Emon 3'
            },
            {
                title: 'titile 4',
                content: "content 4",
                authorName: 'Emon 4'
            }
        ]
    })
    console.log(createMany);
}

createData()