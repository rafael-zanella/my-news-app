import { Typography } from '@/design-system/Typography'
import { useRouter } from 'next/router'
import {
  Comment,
  Heart,
  Bookmark,
  ArrowUpFromBracket,
  ShareNodes,
  CircleArrowUp
} from '@/design-system/icons'
import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { Actions, Author, Banner, Details, NewsLayout, ScrollBackToTopButton, Section } from './StyledComponents'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'
import { FC, useEffect, useState } from 'react'
import { IPost } from '@/shared/types/post.types'
import HtmlMapper from 'react-html-map'

interface INews {
  post: IPost
}

export const News: FC<INews> = ({ post }) => {
  const { back } = useRouter()
  const { theme: { colors } } = useTheme()

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 10) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <NewsLayout>
      <Header onBack={back}>
        <Bookmark width="25px" height="25px" stroke={colors.onBackgroundColor} />
        <ArrowUpFromBracket width="21px" height="21px" stroke={colors.onBackgroundColor} />
      </Header>

      <main>
        <Section>
          <Banner data-testid="news_banner">
            <img src={post?.banner?.imgUrl} alt={post?.banner?.imgAlt} />
          </Banner>

          <Typography type='h1' fontWeight={700} data-testid="news_title" >
            {post.title}
          </Typography>

          <Details data-testid="news_details">
            <Author>
              <img src={post.author.picture} alt={`foto do autor ${post.author.name}`} />
              <Typography type='h4' color={colors.onComplementaryColor}>By {post?.author?.name}</Typography>
              <Typography type='h4' color={colors.onComplementaryColor}>{post.createdAt}</Typography>
            </Author>

            <Actions>
              <div><Comment stroke={colors.onBackgroundColor} />
                <Typography type='h4'>8 comments</Typography>
              </div>

              <div><Heart stroke={colors.onBackgroundColor} />
                <Typography type='h4'>34 likes</Typography>
              </div>

              <div><ShareNodes stroke={colors.onBackgroundColor} />
                <Typography type='h4'>Share</Typography>
              </div>
            </Actions>
          </Details>

          <article data-testid="news_article">
            <HtmlMapper html={post?.article} decodeEntities={undefined}>
              {{ p: ({ ...props }) => <Typography type='p' {...props} /> }}
            </HtmlMapper>
          </article>

          <ScrollBackToTopButton visible={visible} onClick={scrollToTop} data-testid="news_scrollBackToTopButton">
            <CircleArrowUp width="35px" height="35px" />
          </ScrollBackToTopButton>
        </Section>
      </main>

      <Nav />
    </NewsLayout>
  )
}
