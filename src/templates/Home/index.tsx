import { Categories } from '@/components/Categories/Categories'
import type { IPost, TPostCategory } from '@/shared/types/post.types'
import { ListOfPostCards } from '@/components/PostCard/ListOfPostCards'
import { PostCard } from '@/components/PostCard/PostCard'
import { Header, HomeLayout, Logo } from './home.styled'
import Link from 'next/link'
// import { mockNews } from './home.mocks'
import { Nav } from '@/components/Nav/Nav'
import { Typography } from '@/design-system/Typography'
import { LogoDefault } from '@/design-system/icons'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'
import { FC } from 'react'

interface IHome {
  posts: Array<IPost>,
  onChangeCategory: (category: TPostCategory) => any,
}

export const Home: FC<IHome> = ({ posts = [], onChangeCategory }) => {
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
        <Categories defaultValue='All' onChange={onChangeCategory} />

        {
          posts?.length < 1 && (
            <ListOfPostCards>
              <Typography type='h3'>Nenhuma notícia encontrada!</Typography>
            </ListOfPostCards>
          )
        }

        <ListOfPostCards>
          {
            posts?.length > 0 && posts.map((item) => (
              <Link href={`news/${item.id}`} key={item.id}>
                <article>
                  <PostCard
                    imgUrl={item.card.imgUrl}
                    imgAlt={item.card.imgAlt}
                    title={item.title}
                    author={item.author}
                    category={item.category}
                    date={item.createdAt}
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
