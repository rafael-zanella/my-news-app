import { Categories } from '@/components/Categories/Categories'
import { Header } from '@/components/Header/Header'
import { ListOfPostCards } from '@/components/PostCard/ListOfPostCards'
import { PostCard } from '@/components/PostCard/PostCard'
import { Page } from '@/layouts/Page'

const Home = () => {
  return (
    <Page>
      <div style={{ gridArea: 'header' }}>
        <Header />
      </div>

      <div style={{ gridArea: 'categories' }}>
        <Categories defaultValue='All' onChange={() => {}} />
      </div>

      <main style={{ gridArea: 'main' }}>
        <ListOfPostCards>
          <PostCard
            img="https://images.unsplash.com/photo-1598094670018-abf669538033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            intro="Monarch population soars 4,900 percent since last year in thrilling 2021 western migration"
            author="Rafael Zanella"
            category="Technology"
            date="2022/04/02"
          />

          <PostCard
            img="https://images.unsplash.com/photo-1646072609959-0893c1a841d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            intro="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
            author="John Doe"
            category="Business"
            date="2022/03/28"
          />

          <PostCard
            img="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80"
            intro="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
            author="John Doe"
            category="Entertainment"
            date="2022/03/28"
          />

          <PostCard
            img="https://images.unsplash.com/photo-1615215271299-608ada121f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            intro="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
            author="John Doe"
            category="Science"
            date="2022/03/28"
          />

          <PostCard
            img="https://images.unsplash.com/photo-1446941303752-a64bb1048d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            intro="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
            author="John Doe"
            category="Science"
            date="2022/03/28"
          />

          <PostCard
            img="https://images.unsplash.com/photo-1582010905429-bef463482aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            intro="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
            author="John Doe"
            category="Science"
            date="2022/03/28"
          />
        </ListOfPostCards>
      </main>

    </Page>
  )
}

export default Home
