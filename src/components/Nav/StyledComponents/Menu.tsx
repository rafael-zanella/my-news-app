import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Item = styled.div`
  padding: 15px;
  cursor: pointer;
`

export const Menu = styled.div`
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2em;

  @media screen and (${breakpoints.mobile}) {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0;

    box-shadow: 0px -1px 5px 0px rgba(50, 50, 50, 0.1);
  };

  @media screen and (${breakpoints.tablet}){
    position: fixed;
    bottom: unset;
    left: unset;

    display: flex;
    flex-direction: column;
    gap: 50px;

    width: unset;
    box-shadow: none;

    ${Item} { padding: 0 } 
  }
`
