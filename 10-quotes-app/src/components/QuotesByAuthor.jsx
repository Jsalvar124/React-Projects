import QuoteCardAuthor from './QuoteCardAuthor'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function QuotesByAuthor ({ userId }) {
  function useGetQuotes () {
    const [quotes, setQuotesByAuthor] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [author, setAuthor] = useState('')
    const { userId } = useParams()

    // console.log('el user id es:', userId)

    const quotesEndpoint = `https://escriturras.onrender.com/authors/${userId}`

    useEffect(() => {
      fetch(quotesEndpoint)
        .then(response => {
          return response.json()
        })
        .then(quotes => {
          console.log(quotes.data.quotes)
          console.log('RENDER')
          setAuthor(quotes.data.author)
          setQuotesByAuthor(quotes.data.quotes)
        })
        .catch(error => console.log(error))
        .finally(
          setIsLoading(false)
        )
    }, [])

    return { quotes, loading, author }
  }
  // Custo Hook
  const { quotes, loading, author } = useGetQuotes()

  return (
    <>
      {loading && <p>Cargando</p>}
      <h4>{author}</h4>
      <h4>Total: {quotes.length}</h4>
      {quotes.map((quote, id) => {
        return (
          <QuoteCardAuthor quote={quote} key={id} author={author} />
        )
      })}
    </>
  )
}

export default QuotesByAuthor
