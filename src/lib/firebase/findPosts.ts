import { db } from '@/configs/firebase'
import { IPost, TPostCategory } from '@/shared/types/post.types'
import { collectionGroup, getDocs, query, where } from 'firebase/firestore'

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
  const posts: IPost[] = []

  if (category) queryConstraints.push(where('category', '==', `${category}`))
  if (title) queryConstraints.push(where('title', '>=', `${title}`), where('title', '<=', `${title}\uf8ff`))

  const postsQuery = query(postsRef, ...queryConstraints)
  const querySnapshot = await getDocs(postsQuery)

  querySnapshot.forEach(doc => {
    posts.push({
      id: doc.id,
      ...doc.data()
    } as IPost)
  })

  return { posts }
}
