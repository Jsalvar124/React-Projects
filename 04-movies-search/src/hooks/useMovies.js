import noResults from '../mocks/no-results.json'
// import withResults from '../mocks/with-results.json'
import { useState, useRef, useMemo } from 'react'

export function useMovies ({ query, sorted }) {
  const [movies, setMoviesResults] = useState([])
  const previousSearch = useRef(query) // using useRef to avoid the same search.

  const getMovies = ({ query }) => {
    if (query === previousSearch.current) return
    if (query) {
      console.log('fetching with keyword', query)
      previousSearch.current = query
      fetch(`https://www.omdbapi.com/?s=${query}&apikey=9469a74b`)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          json.Response === 'True' ? setMoviesResults(json.Search) : setMoviesResults(noResults.Search)
          // setMoviesResults(withResults.Search)
        })
    } else {
      setMoviesResults(noResults.Search)
    }
  }

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }))

  const sortedMovies = useMemo(() => {
    console.log('RENDER')
    return sorted
      ? [...mappedMovies].sort((a, b) => a.title.localeCompare(b.title))
      : mappedMovies
  }, [movies, sorted])

  return { movies: sortedMovies, getMovies }
}
