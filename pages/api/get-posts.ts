import { NextApiRequest, NextApiResponse } from 'next'
import { Post, PrismaClient } from '@prisma/client'

export interface ResponseData {
  allPosts?: Post[]
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    const prisma = new PrismaClient()
    const allPosts = await prisma.post.findMany()

    res.status(200).json({ allPosts })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
