import { IPost } from '@/shared/types/post.types'
import type { NextApiResponse } from 'next'
import { db } from '@/configs/firebase'
import { addDoc, collection } from 'firebase/firestore'

type Data = {
  id: string
}

type Req = {
  body: Omit<IPost, 'id'>
}

export default async function handler (
  req: Req,
  res: NextApiResponse<Data | null>
) {
  const { body } = req

  body.createdAt = new Date().getTime() as any

  try {
    const docRef = await addDoc(collection(db, 'posts'), body)
    res.status(201).json({ id: docRef.id })
  } catch (e) {
    res.status(400).json(null)
  }
}
