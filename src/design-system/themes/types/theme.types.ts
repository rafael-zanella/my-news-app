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

    p1: string,

    h1Medium: string,
    h1Bold: string,

    h2Medium: string,
    h2Bold: string,

    h3Medium: string,
    h3Bold: string,
  }
}
