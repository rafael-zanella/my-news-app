import styled, { css } from 'styled-components'
import { breakpoints } from '../breakpoints'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H5 = styled.h5<IFont>`
  ${DefaultFont}
  font-size: 2.5vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}


  @media screen and (min-width: 380px) {
    font-size: 2vw;
  }

  @media screen and (min-width: 550px) {
    font-size: 1.5vw;
  }

  @media screen and (${breakpoints.tablet}) {
    font-size: 16px;
  }
`
