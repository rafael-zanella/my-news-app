import styled from 'styled-components'

interface IProps {
  background?: string;
}

export const Container = styled.div<IProps>`
  display: flex;
    justify-content: end;
  cursor: pointer;

  button {
    background-color: ${props => props.theme.colors.onBackgroundColor};
    color: ${props => props.theme.colors.backgroundColor};
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
  }
`
