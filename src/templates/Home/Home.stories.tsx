import { Meta } from '@storybook/react'
import { Home } from './'
import { mockNews } from '../../shared/mocks/posts.mocks'

export default {
  title: 'Templates/Home',
  component: Home
} as Meta

export const WithPosts = () => <Home posts={mockNews} onChangeCategory={() => {}} />
export const WithNoPosts = () => <Home posts={[]} onChangeCategory={() => {}} />
