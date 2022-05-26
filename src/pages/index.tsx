import { Home as HomeTemplate } from '@/templates/Home'
import { useEffect, useState } from 'react'
import { IPost, TPostCategory } from '@/shared/types/post.types'
import { findPosts } from '@/lib/firebase/findPosts'
import nProgress from 'nprogress'

export async function getServerSideProps () {
  const posts = await findPosts({})
  return {
    props: {
      ...posts
    }
  }
}

const Home = (props: { posts: IPost[]}) => {
  const [posts, setPosts] = useState(props.posts)

  useEffect(() => {
    document.title = 'My News App - Pagina inicial'
  }, [])

  const onChangeCategory = async (category: TPostCategory) => {
    nProgress.start()
    const data = await findPosts({ category })
    setPosts(data.posts)
    nProgress.done()
  }

  return <HomeTemplate posts={posts} onChangeCategory={onChangeCategory} />
}

export default Home
