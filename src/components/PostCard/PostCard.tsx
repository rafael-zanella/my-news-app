import type { FC } from 'react'
import { TCategory } from '../Categories/Categories.types'
import { Typography } from '@/design-system/Typography'
import {
  Container,
  Intro,
  Author,
  Category,
  Date,
  Footer,
  Img,
  Dot,
  Line
} from './PostCard.styled'

interface IProps {
  img: string,
  intro: string,
  author: string,
  category: TCategory,
  date: string,
}

export const PostCard: FC<IProps> = ({
  img,
  intro,
  author,
  category,
  date
}) => {
  return (
    <Container>
      <Img src={img} alt='' />
      <Intro>
        <Typography type='h3' fontWeight={700}>{intro}</Typography>
      </Intro>

      <Author>
        <Typography type='h4' >By {author}</Typography>
      </Author>

      <Footer>
        <Category>
          <Typography type='h4' fontWeight={700}>{category}</Typography>
        </Category>

        <Dot />

        <Date>
          <Typography type='h4'>{date}</Typography>
        </Date>
      </Footer>

      <Line />
    </Container>
  )
}
