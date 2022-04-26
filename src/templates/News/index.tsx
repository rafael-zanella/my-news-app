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
import { useEffect, useState } from 'react'

export const News = () => {
  const { back } = useRouter()
  const { theme: { colors } } = useTheme()

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 10) {
      setVisible(true)
    } else if (scrolled <= 10) {
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
      <header data-testid="news_header">
        <Header onBack={back}>
          <Bookmark width="25px" height="25px" stroke={colors.onBackgroundColor} />
          <ArrowUpFromBracket width="21px" height="21px" stroke={colors.onBackgroundColor} />
        </Header>
      </header>

      <main>
        <Section>
          <Banner data-testid="news_banner">
            <img src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='meu alt' />
          </Banner>

          <Typography type='h1' fontWeight={700} data-testid="news_title" >
            Monarch population soars 4,900 percent since last year in thrilling 2021 western migration
          </Typography>

          <Details data-testid="news_details">
            <Author>
              <img src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='foto do autor' />
              <Typography type='h4' color={colors.onComplementaryColor}>By Andy Corbley</Typography>
              <Typography type='h4' color={colors.onComplementaryColor}>1h ago</Typography>
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
            <Typography type='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet diam mi. Donec scelerisque semper pellentesque. Nunc quis efficitur metus, ac ullamcorper urna. Quisque porta iaculis sem, lacinia dictum sem mattis in. Phasellus massa purus, vestibulum eu erat id, vulputate porttitor magna. Integer lectus sapien, pulvinar a elit in, accumsan malesuada sem. Integer commodo arcu ac varius laoreet. Maecenas dapibus eros risus, a cursus urna maximus id. Phasellus quis porttitor mauris, id consectetur enim. Donec ut venenatis felis. Pellentesque id mollis diam. Sed lorem tortor, bibendum et pellentesque tristique, porta vitae justo.</Typography>
            <wbr/>
            <Typography type='p'>Aenean orci elit, pellentesque vel nibh at, vulputate rutrum enim. Ut mollis nulla enim, cursus porta ante convallis quis. Ut ultricies, metus vitae semper blandit, nulla magna bibendum erat, at pharetra odio velit nec est. Vivamus tortor leo, iaculis a imperdiet quis, venenatis sit amet enim. Etiam magna nisl, mollis quis ullamcorper ut, sodales eu orci. Nam et commodo sem. Morbi turpis lacus, pretium in vehicula a, laoreet non risus. Pellentesque lacus ante, pharetra eu blandit at, feugiat in nisl. Maecenas feugiat tortor turpis, ac imperdiet sapien cursus eu. Nullam congue felis nisl, ullamcorper vestibulum quam aliquet at. Quisque tellus risus, dapibus sed lectus ac, consectetur laoreet dui. Donec malesuada laoreet ligula, sit amet ullamcorper tortor varius non.</Typography>
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
