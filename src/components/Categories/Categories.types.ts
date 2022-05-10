import { TPostCategory } from '@/shared/types/post.types'

export interface IProps {
  defaultValue: TPostCategory | 'All',
  onChange: (value: TPostCategory) => void,
}
