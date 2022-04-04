import { ITheme } from './types/theme.types'

export const light: ITheme = {
  title: 'light',

  colors: {
    accentColor: '#180E19',
    complementaryColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',

    onAccentColor: '#FFFFFF',
    onComplementaryColor: '#909090',
    onBackgroundColor: '#180E19'
  },

  fonts: {
    articleTitle: '700 18px Roboto',
    actionSheet: '400 18px Roboto',
    imageCaption: 'italic 400 12px Roboto',

    p1: '400 15px Roboto',

    h1Medium: '400 15px Roboto',
    h1Bold: '700 15px Roboto',

    h2Medium: '400 14px Roboto',
    h2Bold: '700 14px Roboto',

    h3Medium: '400 13px Roboto',
    h3Bold: '700 13px Roboto'
  }
}