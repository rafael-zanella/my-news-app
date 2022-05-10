import { db } from '@/configs/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface IAuthor {
  name: string,
  picture: string,
}

interface IResponse {
  author: IAuthor
}

export const findAuthorById = async (id: string): Promise<IResponse | null> => {
  const authorDocRef = doc(db, 'authors', id)

  const docSnap = await getDoc(authorDocRef)
  const authorData = docSnap.data() as IAuthor

  if (authorData) {
    return { author: authorData }
  } else {
    return null
  }
}
