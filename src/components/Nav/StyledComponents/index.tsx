import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export { Menu, Item } from './Menu'
export { Logo } from './Logo'
export { Notification } from './Notification'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  gap: 10px;

  @media screen and (${breakpoints.tablet}) {
    height: 100vh;
    width: 6em;
    
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`

export const Wrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
    position: relative;
    border-right: 1px solid ${({ theme }) => theme.colors.complementaryColor};
  }
`
