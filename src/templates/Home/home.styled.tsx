import { DefaultLayout } from '@/layouts/DefaultLayout'
import styled from 'styled-components'

export const HomeLayout = styled(DefaultLayout)`
  main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const Header = styled.header`
  grid-area: header;

  position: relative;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  gap: 10px;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.onBackgroundColor};
`
