import { render, screen } from '@testing-library/react'
import { Button } from './Button';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button label="Eu Sou um Botão" />)

    const btn = screen.getByTestId('button');

    expect(btn).toBeDefined();
    expect(btn.textContent).toBe('Eu Sou um Botão');
  })
})