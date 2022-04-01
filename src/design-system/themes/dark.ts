import { ITheme } from './types/theme.types'

export const dark: ITheme = {
  title: 'dark',

  colors: {
    accentColor: '#FFFFFF',
    complementaryColor: '#909090',
    backgroundColor: '#180E19',

    onAccentColor: '#180E19',
    onComplementaryColor: '#EEEEEE',
    onBackgroundColor: '#FFFFFF'
  },

  fonts: {
    articleTitle: '700 18px Roboto',
    actionSheet: '400 18px Roboto',
    imageCaption: 'italic 400 12px Roboto',

    p1: '400 15px Roboto'
  }
}
