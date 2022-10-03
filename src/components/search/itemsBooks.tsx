import { books } from '../type/index'
import '../../styles/search.css'

interface Props {
  books: Array<books>
}

export const ItemsBooks = ({ books }: Props) => {
  return (
    <>

      {
        books.map(el => (
          <div className='items-books' key={el.id}>
            <img src={el.thumbnail}/>
            <h1>{el.title}</h1>
            <h3>{el.publishedDate}</h3>
          </div>
        ))
      }

    </>
  )
}
