import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'

const renderComponent = () => (
  render(
    <ThemeContextProvider>
      <PostCard
        author="Rafa"
        date="20/05/2022"
        img="http://localhost/img"
        imgAlt='something is happening here'
        title="Titulo da postagem"
        category="Business"
      />
    </ThemeContextProvider>
  )
)

describe('PostCard', () => {
  it('should render the component', () => {
    renderComponent()
    screen.getByTestId('postcard')
  })

  it('should render the title', () => {
    renderComponent()
    screen.getByText('Titulo da postagem')
  })

  it('should render the date', () => {
    renderComponent()
    screen.getByText('20/05/2022')
  })

  it('should render the image', () => {
    renderComponent()
    screen.getByAltText('something is happening here')
  })

  it('should render the category', () => {
    renderComponent()
    screen.getByText('Business')
  })

  it('should render the author', () => {
    renderComponent()
    screen.getByText('By Rafa')
  })
})
