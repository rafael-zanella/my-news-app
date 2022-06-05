import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { render, screen, fireEvent } from '@testing-library/react'

import { Categories } from './Categories'

const onChange = jest.fn()

const renderComponent = () => (
  render(
    <ThemeContextProvider>
      <Categories defaultValue='All' onChange={onChange} />
    </ThemeContextProvider>
  )
)

describe('Categories', () => {
  it('should render the component', () => {
    renderComponent()
    screen.getByTestId('categories')
  })

  it('should call onChange callback', () => {
    renderComponent()

    const item: HTMLInputElement = screen.getByLabelText('Mundo')
    expect(item.checked).toEqual(false)

    fireEvent.click(item)
    expect(item.checked).toEqual(true)

    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
