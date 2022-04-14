import styled, { css } from 'styled-components'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const H5 = styled.h5<IFont>`
  ${DefaultFont};
  font-size: 2.5vw;

  ${props => props && css`
    ${{ ...props } as any}
  `}

  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
`
