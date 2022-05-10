import { db } from '@/configs/firebase'
import { IPost, TPostCategory } from '@/shared/types/post.types'
import { collectionGroup, getDocs, query, where } from 'firebase/firestore'
import { findAuthorById } from './findAuthorById'

interface IFindPostsParams {
  category?: TPostCategory,
  title?: string,
}

interface IResponse {
  posts: IPost[]
}

export const findPosts = async ({ category, title }: IFindPostsParams): Promise<IResponse> => {
  const postsRef = collectionGroup(db, 'posts')

  const queryConstraints = []
  const postsFromDB: any = []

  if (category) queryConstraints.push(where('category', '==', `${category}`))
  if (title) queryConstraints.push(where('title', '>=', `${title}`), where('title', '<=', `${title}\uf8ff`))

  const postsQuery = query(postsRef, ...queryConstraints)
  const querySnapshot = await getDocs(postsQuery)

  querySnapshot.forEach(async (doc) => {
    const data = doc.data()

    postsFromDB.push({
      id: doc.id,
      ...data
    })
  })

  const postsWithAuthor = await Promise.all(postsFromDB.map(async (post: any) => {
    const author = await findAuthorById(post.authorRef)
    return {
      ...post,
      ...author
    }
  }))

  return { posts: postsWithAuthor }
}
