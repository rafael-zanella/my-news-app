import { Categories } from '@/components/Categories/Categories'
import { ListOfPostCards } from '@/components/PostCard/ListOfPostCards'
import { PostCard } from '@/components/PostCard/PostCard'
import { HomeLayout } from './home.styled'
import Link from 'next/link'
import { mockNews } from './home.mocks'
import { Nav } from '@/components/Nav/Nav'

export const Home = () => {
  return (
    <HomeLayout>

      <Nav />

      <main>
        <Categories defaultValue='All' onChange={() => {}} />

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
    </HomeLayout>
  )
}
