import { FC } from 'react'
import { Container, Input, Slider } from './Toggle.styled'

interface IProps {
  checked: boolean,
  onChange: () => void,
}

export const Toggle: FC<IProps> = ({ checked, onChange }) => {
  return (
    <Container>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <Slider />
    </Container>
  )
}
