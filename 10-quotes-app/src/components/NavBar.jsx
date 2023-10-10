import { useState, useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import AuthorsList from './AuthorsList'
import Login from './Login'
import QuotesByAuthor from './QuotesByAuthor'
import QuotesList from './QuotesList'
import RandomQuote from './RandomQuote'
import SearchResults from './SearchResults'

function NavBar () {
  const [query, setQuery] = useState('')
  const isFirstLoad = useRef(true)

  console.log('Render')

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new FormData(event.target)
    const searchQuery = fields.get('searchQuery')
    console.log(`Query submited: ${searchQuery}`)
    setQuery(searchQuery)
    console.log(query)
  }

  // const handleChange = (event) => {
  //   const newQuery = event.target.value
  //   setQuery(newQuery)
  //   console.log(newQuery)
  // }

  const clearQuery = () => {
    setQuery('')
  }

  const handleLinkClick = () => {
    const navBar = document.querySelector('.navbar-collapse')
    clearQuery()
    navBar.classList.remove('show')
  }

  const handleSearch = () => {
    const navBar = document.querySelector('.navbar-collapse')
    navBar.classList.remove('show')
  }

  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{ zIndex: 10, borderBottom: 'solid 1px rgba(0,0,0,0.175)' }}>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/' onClick={handleLinkClick}>Las Escriturras</Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' aria-current='page' to='/quotes' onClick={handleLinkClick}>Frases</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/authors' onClick={handleLinkClick}>Autores</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login' onClick={handleLinkClick}>Login</Link>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Dropdown
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' to='/quotes' onClick={handleLinkClick}>Action</Link>
                    </li>
                    <li><a className='dropdown-item' href='#' onClick={handleLinkClick}>Another action</a></li>
                    <li><hr className='dropdown-divider' /></li>
                    <li><a className='dropdown-item' href='#' onClick={handleLinkClick}>Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form onSubmit={handleSubmit} className='d-flex' role='search'>
                <input /* onChange={handleChange} value={query} */ name='searchQuery' className='form-control me-2' type='search' placeholder='Buscar frase' aria-label='Search' />
                <button onClick={handleSearch} className='btn btn-outline-success' type='submit'>Buscar</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main className='main-section' style={{ zIndex: 10 }}>
        <br />
        <div className='container'>
          <Routes>
            {query === '' && <Route path='/' element={<RandomQuote isFirstLoad={isFirstLoad} />} />}
            {query !== '' && <Route path='/' element={<SearchResults query={query} />} />}
            {query === '' && <Route path='/quotes' element={<QuotesList />} />}
            {query !== '' && <Route path='/quotes' element={<SearchResults query={query} />} />}
            {query === '' && <Route path='/authors' element={<AuthorsList />} />}
            {query !== '' && <Route path='/authors' element={<SearchResults query={query} />} />}
            <Route path='/authors/:userId' element={<QuotesByAuthor />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </main>

      <footer className='footer'>
        <p className='summary-text'>Las Escriturras 2023</p>
      </footer>
    </>
  )
}

export default NavBar
