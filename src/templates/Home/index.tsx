import { Categories } from '@/components/Categories/Categories'
import { Header } from '@/components/Header/Header'
import { NavMenu } from '@/components/NavMenu/NavMenu'
import { ListOfPostCards } from '@/components/PostCard/ListOfPostCards'
import { PostCard } from '@/components/PostCard/PostCard'
import { Page } from '@/layouts/Page'
import Link from 'next/link'
import { mockNews } from './home.mocks'

export const Home = () => {
  return (
    <Page>
      <div style={{ gridArea: 'header' }}>
        <Header />
      </div>

      <div style={{ gridArea: 'categories' }}>
        <Categories defaultValue='All' onChange={() => {}} />
      </div>

      <main style={{ gridArea: 'main', marginBottom: '50px' }}>
        <ListOfPostCards>
          {
            mockNews.map((item) => (
              <Link href={`news/${item.id}`} key={item.id}>
                <article>
                  <PostCard
                    img={item.img}
                    intro={item.intro}
                    author={item.author}
                    category={item.category as any}
                    date={item.date}
                  />
                </article>
              </Link>
            ))
          }
        </ListOfPostCards>
      </main>

      <footer style={{ gridArea: 'nav-menu' }}>
        <NavMenu />
      </footer>
    </Page>
  )
}
