import { Categories } from '@/components/Categories/Categories'
import { Header } from '@/components/Header/Header'
import { NavMenu } from '@/components/NavMenu/NavMenu'
import { ListOfPostCards } from '@/components/PostCard/ListOfPostCards'
import { PostCard } from '@/components/PostCard/PostCard'
import { HeaderArea, HomePage, MainArea, NavArea } from './home.styled'
import Link from 'next/link'
import { mockNews } from './home.mocks'

export const Home = () => {
  return (
    <HomePage>
      <HeaderArea>
        <Header />
      </HeaderArea>

      <MainArea>
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
      </MainArea>

      <NavArea>
        <NavMenu />
      </NavArea>
    </HomePage>
  )
}
