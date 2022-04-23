import styled, { css } from 'styled-components'
import { breakpoints } from '../breakpoints'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H2 = styled.h2<IFont>`
  ${DefaultFont}
  font-size: 5vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}


  @media screen and (min-width: 380px) {
    font-size: 4vw;
  }

  @media screen and (min-width: 550px) {
    font-size: 3.5vw;
  }

  @media screen and (${breakpoints.tablet}) {
    font-size: 25px;
  }
`
