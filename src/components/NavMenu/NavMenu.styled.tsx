import styled from 'styled-components'

export const ItemNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100px;
  cursor: pointer;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundColor};

  @media screen and (min-width: 800px){
    flex-direction: column;
    width: fit-content;
    
    ${ItemNav} {
      padding: 15px 0;
      justify-content: flex-end
    }
  
  }

`
