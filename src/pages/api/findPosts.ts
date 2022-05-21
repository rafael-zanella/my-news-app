import { findPosts } from '@/lib/firebase/findPosts'
import { IPost, TPostCategory } from '@/shared/types/post.types'
import type { NextApiResponse } from 'next'

type Data = {
  posts: IPost[]
}

type Req = {
  query: {
    category: TPostCategory,
    title: string,
  }
}

export default async function handler (
  req: Req,
  res: NextApiResponse<Data>
) {
  const { category, title } = req.query

  const posts = await findPosts({ category, title })
  res.status(200).json(posts)
}
