import { Container, Item, RadioButton, RadioButtonLabel, List } from './Categories.styled'
import { Categories as items } from './Categories.constants'
import { FC } from 'react'
import { IProps } from './Categories.types'
import { Typography } from '@/design-system/Typography'

export const Categories: FC<IProps> = ({ defaultValue, onChange }) => {
  const handleOnChange = (e: any) => {
    onChange(e.target.id)
  }

  return (
    <Container data-testid="categories">
      <List>
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
