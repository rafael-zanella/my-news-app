export interface ITheme {
  title: string,

  colors: {
    accentColor: string,
    complementaryColor: string,
    backgroundColor: string,

    onAccentColor: string,
    onComplementaryColor: string,
    onBackgroundColor: string
  }

  fonts: {
    articleTitle: string,
    actionSheet: string,
    imageCaption: string,

    p1: string
  }
}
