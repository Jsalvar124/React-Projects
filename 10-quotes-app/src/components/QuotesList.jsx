import QuoteCard from './QuoteCard'
import { useState, useEffect } from 'react'

function QuotesList () {
  function useGetQuotes () {
    const [quotes, setQuotesList] = useState([])
    const [loading, setIsLoading] = useState(true)

    const quotesEndpoint = 'https://escriturras.onrender.com/quotes'

    useEffect(() => {
      fetch(quotesEndpoint)
        .then(response => {
          return response.json()
        })
        .then(quotes => {
          console.log(quotes.data)
          console.log('RENDER')
          setQuotesList(quotes.data)
        })
        .catch(error => console.log(error))
        .finally(
          setIsLoading(!loading)
        )
    }, [])

    return { quotes, loading }
  }
  // Custo Hook
  const { quotes, loading } = useGetQuotes()

  return (
    <>
      {loading && <p>Cargando Escriturras</p>}
      {quotes.map((quote, id) => {
        return (
          <QuoteCard quote={quote} key={id} />
        )
      })}
    </>
  )
}

export default QuotesList
