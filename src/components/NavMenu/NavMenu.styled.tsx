import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: ${props => props.theme.colors.backgroundColor};

`
export const ItemNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100px;
  cursor: pointer;
`
