import styled, { css } from 'styled-components'
import { breakpoints } from '../breakpoints'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H3 = styled.h3<IFont>`
  ${DefaultFont};
  font-size: 3.3vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (${breakpoints.tablet}) {
    font-size: 23px;
  }
`
