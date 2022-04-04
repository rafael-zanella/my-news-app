import { Container, Item, RadioButton, RadioButtonLabel, List } from './Categories.styled'
import { Categories as items } from './Categories.constants'
import { FC } from 'react'
import { IProps } from './Categories.types'

export const Categories: FC<IProps> = ({ defaultValue, onChange }) => {
  const handleOnChange = (e: any) => {
    onChange(e.target.id)
  }

  return (
    <Container>
      <List>
        { items.map(item => (
          <Item key={item}>
            <RadioButton
              type="radio"
              name="radio"
              id={item}
              defaultChecked={defaultValue === item}
              onChange={handleOnChange}
            />
            <RadioButtonLabel htmlFor={item}>{item}</RadioButtonLabel>
          </Item>
        ))}
      </List>
    </Container>
  )
}