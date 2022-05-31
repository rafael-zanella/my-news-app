import { mockNews } from '@/shared/mocks/posts.mocks'
import { Search as SearchTemplate } from '@/templates/Search'

const Search = () => {
  return (
    <SearchTemplate onChangeFilter={() => {}} posts={mockNews} />
  )
}

export default Search
