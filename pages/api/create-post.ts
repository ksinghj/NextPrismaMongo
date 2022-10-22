import { Post, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import mockPost from '../mockPost'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const postData = JSON.parse(req.body)

    const data = await prisma.post.create({
      data: postData as Post
    })

    res.json(data)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export default handler
