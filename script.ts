import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const allPeople = await prisma.people.findMany()
  console.log(allPeople)
}

main()
