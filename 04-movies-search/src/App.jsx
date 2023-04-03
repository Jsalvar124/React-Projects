import { useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'
import './App.css'

function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [sorted, setSorted] = useState(false)

  const { movies, getMovies } = useMovies({ query, sorted })

  const debounceGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
    }, 400)
    , [])

  // manipulating multiple DOM objects and validating.
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const {query} = Object.fromEntries(new window.FormData(e.target))
  //   console.log(query)

  //   if (query === '') {
  //     setError('No se ingresó ninguna película')
  //   } else {
  //     setError(null)
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
    console.log('submit is', query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return // evita que el query comience con espacio.
    setQuery(newQuery)
    debounceGetMovies(newQuery)
    console.log('current query is', newQuery)

    if (newQuery === '') {
      setError('No se ingresó ninguna película')
      return
    }
    if (newQuery.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }

  const handleSort = ({ movies }) => {
    setSorted(!sorted)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action='get' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' value={query} type='text' placeholder='Avengers, Her...' />
          {error && <p className='error' style={{ color: 'tomato' }}>{error}</p>}
          <label htmlFor='sort'>Ordenar
            <input onChange={handleSort} type='checkbox' name='sort' id='sort' />
          </label>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
