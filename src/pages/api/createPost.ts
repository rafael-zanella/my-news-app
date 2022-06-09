import { TPostCategory } from '@/shared/types/post.types'
import type { NextApiResponse } from 'next'
import { db } from '@/configs/firebase'
import { addDoc, collection } from 'firebase/firestore'

type Data = {
  id: string
}

interface IBody {
  title: string,
  authorRef: string
  category: TPostCategory,
  article: string,

  card: {
    imgUrl: string,
    imgAlt: string,
  },

  banner: {
    imgUrl: string,
    imgAlt: string,
  }
}

type Req = {
  body: IBody
}

export default async function handler (
  req: Req,
  res: NextApiResponse<Data | null>
) {
  const { body } = req

  const post = {
    ...body,
    createdAt: new Date().getTime()
  }

  try {
    const docRef = await addDoc(collection(db, 'posts'), post)
    res.status(201).json({ id: docRef.id })
  } catch (e) {
    res.status(400).json(null)
  }
}
