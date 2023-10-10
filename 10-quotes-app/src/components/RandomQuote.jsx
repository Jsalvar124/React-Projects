import QuoteCard from './QuoteCard'
import { useState, useEffect } from 'react'

function RandomQuote ({ isFirstLoad }) {
  const baseQuote = {
    quote: 'Cargando',
    author: 'Cargando'
  }

  const [quote, setRandomQuote] = useState(baseQuote)
  const [loading, setIsLoading] = useState(false)

  const quotesEndpoint = 'https://escriturras.onrender.com/quotes/random'

  useEffect(() => {
    fetch(quotesEndpoint)
      .then(response => {
        return response.json()
      })
      .then(quote => {
        console.log(quote.data)
        console.log('RENDER')
        setRandomQuote(quote.data)
      })
      .catch(error => console.log(error))
  }, [loading])

  function handleClick () {
    console.log('CLICK')
    setIsLoading(!loading)
    setRandomQuote(baseQuote)
    isFirstLoad.current = false
    console.log(isFirstLoad)
  }

  return (
    <>
      {/* QuoteCard */}
      <div>
        <br />
        {isFirstLoad.current && <h4>Bienvenido a las Escriturras</h4>}
        {!isFirstLoad.current && <QuoteCard quote={quote} />}
      </div>
      <br />
      <button onClick={handleClick} type='button' className='btn btn-outline-success'>Nueva Escriturra</button>
    </>
  )
}

export default RandomQuote
