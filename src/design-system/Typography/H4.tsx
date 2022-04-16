import styled, { css } from 'styled-components'
import { breakpoints } from '../breakpoints'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H4 = styled.h4<IFont>`
  ${DefaultFont};
  font-size: 2.9vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (${breakpoints.tablet}) {
    font-size: 21px;
  }
`
