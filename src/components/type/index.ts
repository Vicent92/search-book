export interface books {
  id: string
  title: string
  publishedDate: string
  thumbnail: string
}

export type responseFromApi = Array<{
  id: string
  volumeInfo: {
    title: string,
    publishedDate: string
    imageLinks: {thumbnail: string}
  }
}>
