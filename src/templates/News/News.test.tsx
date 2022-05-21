import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { render, screen } from '@testing-library/react'
import { News } from '.'
import { mockPost } from './news.mocks'

const renderComponent = () => (
  render(
    <ThemeContextProvider>
      <News post={mockPost} />
    </ThemeContextProvider>
  )
)

describe('News', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter')
  useRouter.mockImplementationOnce(() => ({
    back: jest.fn()
  }))

  it('should render the page with its components', () => {
    renderComponent()
    screen.getByTestId('news_header')
    screen.getByTestId('news_banner')
    screen.getByTestId('news_details')
    screen.getByTestId('news_article')
    screen.getByTestId('news_scrollBackToTopButton')
  })
})
