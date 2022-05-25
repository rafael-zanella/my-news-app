import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'

const renderComponent = () => (
  render(
    <ThemeContextProvider>
      <Nav />
    </ThemeContextProvider>
  )
)

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  route: '/'
}))

describe('Nav', () => {
  it('should render the component', () => {
    renderComponent()
    screen.getByTestId('nav')
  })

  xit('should redirect user to Search page', () => {
    // TODO
  })

  xit('should redirect user to Bookmarks page', () => {
    // TODO
  })

  xit('should redirect user to Settings page', () => {
    // TODO
  })

  xit('should redirect user to Home page', () => {
    // TODO
  })
})
