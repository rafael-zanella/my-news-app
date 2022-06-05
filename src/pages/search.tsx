import { Search as SearchTemplate } from '@/templates/Search'
import { useState } from 'react'
import { IPost } from '@/shared/types/post.types'
import nProgress from 'nprogress'

// TODO: put this method in a service folder
const findPostsByTitle = async (title: string) => {
  const data = await fetch(`/api/findPosts?title=${title}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return data
}

const Search = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  const onChangeFilter = async (title: any) => {
    nProgress.start()
    try {
      const res = await findPostsByTitle(title)
      const data = await res.json()
      setPosts(data.posts)
    } catch (e) {
      setPosts([])
      console.error(e)
    } finally {
      nProgress.done()
    }
  }

  return (
    <SearchTemplate onChangeFilter={onChangeFilter} posts={posts} />
  )
}

export default Search
