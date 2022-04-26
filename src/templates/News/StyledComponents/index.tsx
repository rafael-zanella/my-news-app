import { DefaultLayout } from '@/layouts/DefaultLayout'
import styled from 'styled-components'

export { ScrollBackToTopButton } from './ScrollBackToTopButton'
export { Section } from './Section'
export { Banner } from './Banner'
export { Details } from './Details'
export { Author } from './Author'
export { Actions } from './Actions'

export const NewsLayout = styled(DefaultLayout)`
  overflow: unset;

  header {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.backgroundColor}; // ${props => props.theme.colors.backgroundColor};
  }
`
