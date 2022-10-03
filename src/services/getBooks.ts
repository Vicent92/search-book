export const getBooks = async (author: String): Promise<any> => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor=${author}&key=AIzaSyDSYr1E8_PNPksPGTGLAYHYeOrQwoesHAQ`
  const res = await fetch(url)
  const json = await res.json()

  return json.items
}
