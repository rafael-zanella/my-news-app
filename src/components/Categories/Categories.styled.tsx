import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  gap: 10px;
  
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.div`
  position: relative ;
  display: flex;
  width: 100vw;
  left: -20px;
  padding: 20px 0 10px;
  
  @media screen and (${breakpoints.tablet}) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px;

    ${List} {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`

export const Item = styled.div`
  :first-child {
    margin-left: 20px;
  }
  :last-child {
    margin-right: 20px;
  }
`

export const RadioButtonLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 40px;
  background-color: ${props => props.theme.colors.complementaryColor};
  color: ${props => props.theme.colors.onComplementaryColor};
`

export const RadioButton = styled.input`
  display: none;

  :checked + ${RadioButtonLabel}{
    background-color: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.onAccentColor};
  }
`
