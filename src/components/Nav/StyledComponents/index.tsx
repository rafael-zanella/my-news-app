import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export { Menu, Item } from './Menu'
export { Logo } from './Logo'

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
    height: calc(100vh + 20px); // 20px = default page padding size
    width: 60px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`

export const Wrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
    position: fixed;
    top: -20px;
    border-right: 1px solid ${({ theme }) => theme.colors.complementaryColor};
  }
`
