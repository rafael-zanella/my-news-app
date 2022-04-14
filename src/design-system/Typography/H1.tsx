import styled, { css } from 'styled-components'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H1 = styled.h1<IFont>`
  ${DefaultFont}
  font-size: 3.9vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 800px) {
    font-size: 27px;
  }
`
