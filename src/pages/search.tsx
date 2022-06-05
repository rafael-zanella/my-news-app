import { Search as SearchTemplate } from '@/templates/Search'
import { baseUrl } from '@/configs/server'
import { useState } from 'react'
import { IPost } from '@/shared/types/post.types'

// TODO: put this method in a service folder
const findPostsByTitle = async (title: string) => {
  const data = await fetch(`${baseUrl}/api/findPosts?title=${title}`, {
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
    const res = await findPostsByTitle(title)
    const data = await res.json()
    setPosts(data.posts)
  }

  return (
    <SearchTemplate onChangeFilter={onChangeFilter} posts={posts} />
  )
}

export default Search
