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
  left: -10px;
  padding: 20px 0 10px;
  
  @media screen and (min-width: 768px) {
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
`

export const RadioButton = styled.input`
  display: none;

  :checked + ${RadioButtonLabel}{
    background-color: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.onAccentColor};
  }
`
