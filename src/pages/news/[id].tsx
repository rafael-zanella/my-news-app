import { findPostById } from '@/lib/firebase/findPostById'
import { findPosts } from '@/lib/firebase/findPosts'
import { IPost } from '@/shared/types/post.types'
import { News as NewsTemplate } from '@/templates/News'

export const getStaticProps = async ({ params }: { params: { id: string }}) => {
  const data = await findPostById(params.id as string)

  if (!data?.post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: data?.post
    }
  }
}

export async function getStaticPaths () {
  const { posts } = await findPosts({})
  const paths = posts.map((post) => ({
    params: { id: post.id }
  }))

  return { paths, fallback: false }
}

const News = (props: { post: IPost}) => {
  return <NewsTemplate post={props.post} />
}

export default News
