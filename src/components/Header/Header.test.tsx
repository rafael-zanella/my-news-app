import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { screen, render, fireEvent } from '@testing-library/react'
import { Header } from './Header'

const onBack = jest.fn()

describe('Header', () => {
  it('should call onBack callback', () => {
    render(
        <ThemeContextProvider>
          <Header onBack={onBack} />
        </ThemeContextProvider>
    )

    const onBackBtn = screen.getByTestId('header_onBack_button')
    fireEvent.click(onBackBtn)
    expect(onBack).toHaveBeenCalled()
  })

  it('should render title', () => {
    render(
        <ThemeContextProvider>
          <Header title='My Page' />
        </ThemeContextProvider>
    )

    screen.getByText('My Page')
  })

  it('should render children', () => {
    render(
      <ThemeContextProvider>
        <Header>
          <h2>I am an icon</h2>
        </Header>
      </ThemeContextProvider>
    )

    screen.getByTestId('header_actions')
    screen.getByText('I am an icon')
  })

  it('should render back button, title and actions', () => {
    render(
      <ThemeContextProvider>
        <Header onBack={onBack} title="Title">
          <h2>I am an icon</h2>
        </Header>
      </ThemeContextProvider>
    )

    screen.getByTestId('header_onBack_button')
    screen.getByText('Title')
    screen.getByTestId('header_actions')
    screen.getByText('I am an icon')
  })
})
