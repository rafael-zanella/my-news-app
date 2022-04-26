import styled, { css } from 'styled-components'
import { breakpoints } from '../breakpoints'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H3 = styled.h3<IFont>`
  ${DefaultFont}
  font-size: 4vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}


  @media screen and (min-width: 380px) {
    font-size: 3.5vw;
  }

  @media screen and (min-width: 550px) {
    font-size: 3vw;
  }

  @media screen and (${breakpoints.tablet}) {
    font-size: 20px;
  }
`
