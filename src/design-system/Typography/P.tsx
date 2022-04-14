import styled, { css } from 'styled-components'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const P = styled.p<IFont>`
  ${DefaultFont};
  font: 2.5vw Roboto;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
