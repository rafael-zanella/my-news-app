import styled, { css } from 'styled-components'
import { IFont } from './Font.types'

export const H5 = styled.h5<IFont>`
  font: 2.5vw Roboto;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 700px) {
    font-size: 18px;
  }
`
