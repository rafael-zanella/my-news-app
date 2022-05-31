import { Fade } from '@/design-system/animations/Fade'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import styled from 'styled-components'

export const SearchLayout = styled(DefaultLayout)`
  overflow: unset;

  header {
    grid-area: header;
    position: sticky;
    top: 0;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`

export const Section = styled.section`
  animation: ${Fade} 300ms ease-in;
`
