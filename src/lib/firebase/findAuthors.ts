import { db } from '@/configs/firebase'
import { collectionGroup, getDocs, query } from 'firebase/firestore'

interface IResponse {
  authors: {
    id: string,
    name: string,
    picture: string,
  }
}

export const findAuthors = async (): Promise<IResponse> => {
  const authorsRef = collectionGroup(db, 'authors')
  const authors: any = []

  const authorsQuery = query(authorsRef)
  const querySnapshot = await getDocs(authorsQuery)

  querySnapshot.forEach(async (doc) => {
    const data = doc.data()

    authors.push({
      id: doc.id,
      ...data
    })
  })

  return { authors }
}
