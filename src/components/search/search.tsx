import { TextField, IconButton, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'
import { getBooks } from '../../services/getBooks'
import { ItemsBooks } from './itemsBooks'
import { responseFromApi } from '../type/index'
import '../../styles/search.css'

export const Search = () => {
  const [value, setValue] = useState('')
  const [books, setBooks] = useState([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target
    setValue(value.toLowerCase())
  }

  const apiMap = (apiResponse: responseFromApi) => {
    return apiResponse.map(el => {
      const { id } = el
      const { title, publishedDate } = el.volumeInfo
      const { thumbnail } = el.volumeInfo.imageLinks
      return {
        id,
        title,
        publishedDate,
        thumbnail
      }
    })
  }

  const handleClick = async () => {
    const all_books = await getBooks(value)
    const b = apiMap(all_books)
    setBooks(b)
    console.log(b)
  }

  return (
    <section className="container-search">

      <Stack
      direction='row'
      sx={{
        width: '90%',
        height: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '500px',
        marginTop: '30px'
        // backgroundColor: 'red'
      }}
      >
        <TextField
          id="outlined-basic"
          label="Book"
          variant="outlined"
          sx={{width: '90%'}}
          value={value}
          onChange={handleChange}
        />

        <IconButton
          sx={{
            right: '35px'
          }}
          onClick={handleClick}
        >
          <SearchIcon/>
        </IconButton>
      </Stack>

      <div className='container-items-books'>
        <ItemsBooks
          books={books}
        />
      </div>

    </section>
  )
}
