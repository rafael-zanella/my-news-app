import { Input } from '@/components/Input/Input'
import { Nav } from '@/components/Nav/Nav'
import { SearchLayout, Section } from './Search.styled'
import { Search as SearchIcon } from '@/design-system/icons'
import { FC, useState } from 'react'
import { ListOfPostCards } from '@/components/PostCard/ListOfPostCards'
import { Typography } from '@/design-system/Typography'
import Link from 'next/link'
import { PostCard } from '@/components/PostCard/PostCard'
import { IPost } from '@/shared/types/post.types'

interface IProps {
  posts: IPost[],
  onChangeFilter: (value: string) => void,
}

export const Search: FC<IProps> = ({ posts, onChangeFilter }) => {
  const [value, setValue] = useState('')

  const onChangeInput = (value: string) => {
    setValue(value)
    if (value.trim()) {
      onChangeFilter(value)
    }
  }

  return (
    <SearchLayout data-testid="search_template">
      <header>
        <Input
          type='text'
          placeholder="Pesquisar"
          Icon={<SearchIcon width={20} height={20} stroke="#909090" />}
          value={value}
          onChange={(e) => onChangeInput(e.target.value)}
          onClickCancelButton={() => setValue('')}
        />
      </header>

      <main>
        {
          value && posts?.length < 1 && (
            <ListOfPostCards>
              <div style={{ alignSelf: 'center' }}>
                <Typography type='h3'>Nenhuma notícia encontrada!</Typography>
              </div>
            </ListOfPostCards>
          )
        }
        {
          value && (
            <Section>
              <ListOfPostCards>
                {
                  posts?.length > 0 && posts.map((item) => (
                    <Link href={`news/${item.id}`} key={item.id}>
                      <article key={item.id}>
                        <PostCard
                          imgUrl={item.card.imgUrl}
                          imgAlt={item.card.imgAlt}
                          title={item.title}
                          author={item.author.name}
                          category={item.category}
                          date={new Date(item.createdAt).toLocaleDateString('pt-BR')}
                        />
                      </article>
                    </Link>
                  ))
                }
              </ListOfPostCards>
            </Section>
          )
        }
      </main>
      <Nav />
    </SearchLayout>
  )
}
