import { db } from '@/configs/firebase'
import { IPost } from '@/shared/types/post.types'
import { doc, getDoc } from 'firebase/firestore'
import { findAuthorById } from './findAuthorById'

interface IResponse {
  post: IPost
}

export const findPostById = async (id: string): Promise<IResponse | null> => {
  const postsDocRef = doc(db, 'posts', id)

  let post: IPost

  const docSnap = await getDoc(postsDocRef)
  const postData = docSnap.data()

  if (postData) {
    const author = await findAuthorById(postData.authorRef)

    post = { id, ...author, ...postData } as IPost

    return { post }
  }

  return null
}
