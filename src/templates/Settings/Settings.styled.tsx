import { DefaultLayout } from '@/layouts/DefaultLayout'
import styled from 'styled-components'

export const SettingsLayout = styled(DefaultLayout)`
  main {
    width: 100%;
  };
`

export const Section = styled.section`
  width: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.complementaryColor};

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`
