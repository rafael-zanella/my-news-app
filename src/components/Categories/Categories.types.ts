export type TCategory =
  | 'All'
  | 'World'
  | 'Politics'
  | 'Technology'
  | 'Science'
  | 'Business'
  | 'Entertainment'
  | 'Food'

export interface IProps {
  defaultValue: TCategory,
  onChange: (value: string) => void,
}
