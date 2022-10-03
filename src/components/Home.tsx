import '../styles/home.css'
import { LeadingPage } from './leadingPage'
import { Search } from './search/search'
import  { Routes, Route } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='container-home'>

      <header>
        <h3 className='title-header'>Search Book</h3>
      </header>

      <Routes>

        <Route path='/' element={<LeadingPage/>}/>

        <Route path='/search' element={<Search/>}/>

      </Routes>

    </div>
  )
}
