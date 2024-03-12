import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async() => {
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })

    const sumOfAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    })

    const countData = await prisma.user.count()

    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })

    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })

    console.log(countData);
}

aggregate()