import styled, { css } from 'styled-components'
import { IFont } from './Font.types'

export const H2 = styled.h2<IFont>`
  font: 3.6vw Roboto;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 700px) {
    font-size: 25px;
  }
`
