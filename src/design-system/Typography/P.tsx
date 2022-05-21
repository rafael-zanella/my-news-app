import styled, { css } from 'styled-components'
import { breakpoints } from '../breakpoints'
import { DefaultFont } from './DefaultFont'
import { IFont } from './Font.types'

export const P = styled.p<IFont>`
  ${DefaultFont};
  font: 16px Roboto;
  line-height: 26px;
  margin-bottom: 20px;

  ${props => props && css`
    ${{ ...props } as any}
  `};

  @media screen and (${breakpoints.tablet}) {
    font-size: 18px;
    line-height: 30px;
  }
`
