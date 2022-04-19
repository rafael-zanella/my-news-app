import styled, { css } from 'styled-components'
import { breakpoints } from '../breakpoints'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H1 = styled.h1<IFont>`
  ${DefaultFont}
  font-size: 3.9vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (${breakpoints.tablet}) {
    font-size: 27px;
  }
`
