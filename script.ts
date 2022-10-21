import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const allPosts = await prisma.post.findMany()
  console.log(allPosts)
}

main()
