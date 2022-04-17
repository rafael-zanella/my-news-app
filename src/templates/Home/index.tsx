import { Categories } from '@/components/Categories/Categories'
import { ListOfPostCards } from '@/components/PostCard/ListOfPostCards'
import { PostCard } from '@/components/PostCard/PostCard'
import { Header, HomeLayout, Logo } from './home.styled'
import Link from 'next/link'
import { mockNews } from './home.mocks'
import { Nav } from '@/components/Nav/Nav'
import { Typography } from '@/design-system/Typography'
import { LogoDefault } from '@/design-system/icons'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'

export const Home = () => {
  const { theme: { colors }, changeTheme } = useTheme()

  return (
    <HomeLayout data-testid="home">

      <Header>
        <Logo>
          <LogoDefault fill={colors.onBackgroundColor} onClick={changeTheme} />
          <Typography type='h2' fontWeight={700}>My News App</Typography>
        </Logo>
      </Header>

      <main>
        <Categories defaultValue='All' onChange={() => {}} />

        <ListOfPostCards>
          {
            mockNews.map((item) => (
              <Link href={`news/${item.id}`} key={item.id}>
                <article>
                  <PostCard
                    img={item.img}
                    imgAlt={item.imgAlt}
                    title={item.title}
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

      <Nav hideLogo />

    </HomeLayout>
  )
}
