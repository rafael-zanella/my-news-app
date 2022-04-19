export interface IFont {
  color?: string, // Pick<ITheme, 'colors'>,
  font?: string,
  fontWeight?: 100 | 400 | 500 | 700,
  fontStyle?: 'italic' | 'normal' | 'oblique',
  fontSize?: string,
  lineHeight?: string,
  fontFamily?: string,
}
