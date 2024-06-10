import { PrismaClient } from '@prisma/client'

const client = new PrismaClient

async function getCategories() {
    const CategoryList = await client.user.findMany();
    console.log(CategoryList);
}
console.log('getCategories', getCategories());
