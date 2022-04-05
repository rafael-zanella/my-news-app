import styled, { css } from 'styled-components'
import { IFont } from './Font.types'

export const H3 = styled.h3<IFont>`
  font: 3.3vw Roboto;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 700px) {
    font-size: 23px;
  }
`
