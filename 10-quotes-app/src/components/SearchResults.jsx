import QuoteCard from './QuoteCard'
import { useState, useEffect } from 'react'
// import debounce from 'just-debounce-it'

function SearchResults ({ query }) {
  function useGetQuotes () {
    const [quotes, setSearchResults] = useState([])

    const quotesEndpoint = `https://escriturras.onrender.com/quotes/search?keyword=${query}`

    useEffect(() => {
      fetch(quotesEndpoint)
        .then(response => {
          return response.json()
        })
        .then(quotes => {
          console.log(quotes.data)
          console.log('fetch', query)
          setSearchResults(quotes.data)
        })
        .catch(error => console.log(error))
    }, [query])

    return { quotes }
  }
  // Use the Custom Hook
  const { quotes } = useGetQuotes()

  return (
    <>
      {quotes.length === 0 && <p style={{ padding: '20px' }}>No se encontraron resultados.</p>}
      {quotes.length === 1 && <p style={{ padding: '20px' }}>Noice! Se encontró {quotes.length} resultado.</p>}
      {quotes.length > 1 && <p style={{ padding: '20px' }}>Noice! Se encontraron {quotes.length} resultados.</p>}
      {quotes.map((quote, id) => {
        return (
          <QuoteCard quote={quote} key={id} />
        )
      })}
    </>
  )
}

export default SearchResults
