import { FC } from 'react'
import { TPostCategory } from '@/shared/types/post.types'
import { Typography } from '@/design-system/Typography'
import {
  Container,
  Title,
  Author,
  Category,
  Date,
  Footer,
  Img,
  Dot,
  Line
} from './PostCard.styled'

interface IProps {
  imgUrl: string,
  imgAlt: string,
  title: string,
  author: string,
  category: TPostCategory,
  date: string,
}

export const PostCard: FC<IProps> = (props) => {
  return (
    <Container data-testid="postcard">
      <Img src={props.imgUrl} alt={props.imgAlt} />
      <Title>
        <Typography type='h3' fontWeight={700}>{props.title}</Typography>
      </Title>

      <Author>
        <Typography type='h4'>By {props.author}</Typography>
      </Author>

      <Footer>
        <Category>
          <Typography type='h4' fontWeight={700}>{props.category}</Typography>
        </Category>

        <Dot />

        <Date>
          <Typography type='h4'>{props.date}</Typography>
        </Date>
      </Footer>

      <Line />
    </Container>
  )
}
