import { FC } from 'react'
import { Container } from './Button.styled'

interface IProps {
  label: string,
  background?: string,
  onClick: () => {},
}

export const Button: FC<IProps> = ({ label, background, onClick }) => {
  return (
    <Container data-testid="button" background={background}>
      <button onClick={onClick}>{label}</button>
    </Container>
  )
}
