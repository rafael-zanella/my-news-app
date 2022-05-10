import { Container, Item, RadioButton, RadioButtonLabel, List } from './Categories.styled'
import { Categories as items } from './Categories.constants'
import { FC } from 'react'
import { IProps } from './Categories.types'
import { Typography } from '@/design-system/Typography'

export const Categories: FC<IProps> = ({ defaultValue, onChange }) => {
  const handleOnChange = (e: any) => {
    let id = e.target.id
    if (id === 'All') id = ''
    onChange(id)
  }

  return (
    <Container data-testid="categories">
      <List>
      <Item key="All" data-testid="categories_item">
        <RadioButton
          type="radio"
          name="radio"
          id="All"
          defaultChecked={defaultValue === 'All'}
          onChange={handleOnChange}
        />
        <RadioButtonLabel htmlFor="All">
          <Typography type='h4'>All</Typography>
        </RadioButtonLabel>
      </Item>
        { items.map(item => (
          <Item key={item} data-testid="categories_item">
            <RadioButton
              type="radio"
              name="radio"
              id={item}
              defaultChecked={defaultValue === item}
              onChange={handleOnChange}
            />
            <RadioButtonLabel htmlFor={item}>
              <Typography type='h4'>{item}</Typography>
            </RadioButtonLabel>
          </Item>
        ))}
      </List>
    </Container>
  )
}
