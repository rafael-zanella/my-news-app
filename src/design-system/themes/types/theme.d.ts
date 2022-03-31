import 'styled-components'
import type { ITheme } from './theme.types'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
