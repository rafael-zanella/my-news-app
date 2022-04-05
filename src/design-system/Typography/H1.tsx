import styled, { css } from 'styled-components'
import { IFont } from './Font.types'

export const H1 = styled.h1<IFont>`
  font: 3.9vw Roboto;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 700px) {
    font-size: 27px;
  }
`
