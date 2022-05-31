import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { Container } from './Input.styled'
import { CircleDelete, CircleDeleteDefault } from '@/design-system/icons'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ReactNode,
  onClickCancelButton: () => void,
}

export const Input: FC<IProps> = ({ Icon, value, onClickCancelButton, ...others }) => {
  return (
    <Container>
      { Icon }

      <input value={value} {...others} />

      { value
        ? <CircleDelete width={20} height={20} onClick={onClickCancelButton} />
        : <CircleDeleteDefault width={20} height={20} />
      }

    </Container>
  )
}
