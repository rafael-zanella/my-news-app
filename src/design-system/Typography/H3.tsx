import styled, { css } from 'styled-components'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H3 = styled.h3<IFont>`
  ${DefaultFont};
  font-size: 3.3vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 700px) {
    font-size: 23px;
  }
`
