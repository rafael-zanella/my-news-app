import { IPost } from '@/shared/types/post.types'

export const mockPost: IPost = {
  id: '4',
  card: {
    imgUrl: '',
    imgAlt: 'something is happening here'
  },
  banner: {
    imgUrl: '',
    imgAlt: ''
  },
  title: 'The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade',
  author: {
    name: 'John Doe',
    picture: ''
  },
  category: 'Science',
  createdAt: '2022-04-02',
  updatedAt: '',
  deletedAt: '',
  article: 'this is the article'
}
