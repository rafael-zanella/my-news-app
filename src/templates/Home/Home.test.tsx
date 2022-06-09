import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { fireEvent, render, screen } from '@testing-library/react'
import { Home } from '.'
import { mockNews } from '@/shared/mocks/posts.mocks'

const onChangeCategory = jest.fn()

const renderComponent = () => (
  render(
    <ThemeContextProvider>
      <Home posts={mockNews} onChangeCategory={onChangeCategory} />
    </ThemeContextProvider>
  )
)

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({ route: '/' }))

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

  it('should render msg when there have no post', () => {
    render(
      <ThemeContextProvider>
        <Home posts={[]} onChangeCategory={onChangeCategory} />
      </ThemeContextProvider>
    )
    screen.getByText('Nenhuma notícia encontrada!')
  })

  it('should call onChangeCategory callback', () => {
    renderComponent()

    const item: HTMLInputElement = screen.getByLabelText('Mundo')
    fireEvent.click(item)

    expect(onChangeCategory).toHaveBeenCalledTimes(1)
  })
})
