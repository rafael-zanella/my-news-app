import styled from 'styled-components'

export const Container = styled.div`
  position: relative ;
  justify-content: center;
  width: 100vw;
  left: -10px;
`

export const List = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.div`
  :first-child {
    margin-left: 10px;
  }
  :last-child {
    margin-right: 10px;
  }
`

export const RadioButtonLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 40px;
  background-color: ${props => props.theme.colors.complementaryColor};
  color: ${props => props.theme.colors.onComplementaryColor};
  font: ${({ theme }) => theme.fonts.h2Medium};
`

export const RadioButton = styled.input`
  display: none;

  :checked + ${RadioButtonLabel}{
    background-color: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.onAccentColor};
  }
`
