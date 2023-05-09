export interface CustomCard {
  title: string,
  description: string,
  imageLink: string,
  videoLink: string
  date: string
}

export interface State {
  customCard: CustomCard[]
}
