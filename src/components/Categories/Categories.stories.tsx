import { Meta } from '@storybook/react'
import { Categories } from './Categories'

export default {
  title: 'Components/Categories',
  component: Categories
} as Meta

export const Normal = () => <Categories defaultValue='All' onChange={() => {}} />
