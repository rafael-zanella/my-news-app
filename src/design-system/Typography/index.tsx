import type { FC, ComponentType } from 'react'
import { IFont } from './Font.types'
import { H1 } from './H1'
import { H2 } from './H2'
import { H3 } from './H3'
import { H4 } from './H4'
import { H5 } from './H5'
import { P } from './P'

type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'

interface IProps extends IFont {
  type: TVariant,
}

type TItens = {
  [K in TVariant]: ComponentType<IFont>
}

export const Typography: FC<IProps> = ({ type, children, ...others }) => {
  const itens: TItens = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: P
  }

  const Font = itens[type]

  return (
    <Font {...others}>
      {children}
    </Font>
  )
}
