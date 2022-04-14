import styled, { css } from 'styled-components'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H2 = styled.h2<IFont>`
  ${DefaultFont};
  font-size: 3.6vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
