import { Post } from '@prisma/client'

// const mockPost: Post = {
//   id: 'ID',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   title: 'title',
//   content: 'content',
//   published: true,
//   viewCount: 5,
//   authorId: '2'
// }

const mockPost: Post = {
  id: '635323d778c9a95ff16b3ffc',
  createdAt: new Date('2022-10-21T22:57:27.286+00:00'),
  updatedAt: new Date('2022-10-21T22:57:27.286+00:00'),
  title: 'Join the MongoDB Community',
  content: 'https://community.mongodb.com/',
  published: true,
  viewCount: 0,
  authorId: '635323d778c9a94ff16b3ffb'
}

export default mockPost
