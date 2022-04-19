import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { render, screen } from '@testing-library/react'
import { Home } from '.'

const renderComponent = () => (
  render(
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  )
)

describe('Home', () => {
  it('should render the component', () => {
    renderComponent()
    screen.getByTestId('home')
  })

  it('should render the nav', () => {
    renderComponent()
    screen.getByTestId('nav')
  })

  it('should render the categories', () => {
    renderComponent()
    screen.getByTestId('categories')
  })

  it('should render the posts', () => {
    renderComponent()
    screen.getAllByTestId('postcard')
  })
})
