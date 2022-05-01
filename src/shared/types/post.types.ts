export type TPostCategory =
  | 'World'
  | 'Politics'
  | 'Technology'
  | 'Science'
  | 'Business'
  | 'Entertainment'
  | 'Food'

export interface IPost {
  id: string,
  title: string,
  author: string,
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
