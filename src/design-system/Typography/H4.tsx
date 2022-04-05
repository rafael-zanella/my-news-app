import styled, { css } from 'styled-components'
import { IFont } from './Font.types'

export const H4 = styled.h4<IFont>`
  font: 2.9vw Roboto;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 700px) {
    font-size: 21px;
  }
`
