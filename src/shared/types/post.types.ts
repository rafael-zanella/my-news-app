export type TPostCategory =
  | 'Mundo'
  | 'Política'
  | 'Tecnologia'
  | 'Ciência'
  | 'Negócios'
  | 'Entretenimento'
  | 'Gastronomia'

export interface IPost {
  id: string,
  title: string,
  author: {
    name: string,
    picture: string,
  }
  category: TPostCategory,
  article: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,

  card: {
    imgUrl: string,
    imgAlt: string,
  },

  banner: {
    imgUrl: string,
    imgAlt: string,
  }
}
