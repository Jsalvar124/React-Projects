function QuoteCard ({ quote }) {
  return (
    <div className='card mb-2'>
      <div className='card-header'>
        #{quote.id}
      </div>
      <div className='card-body'>
        <blockquote className='blockquote my-0 px-3'>
          {quote.quote_ans && <p>-"{quote.quote}."</p>}
          {quote.quote_ans && <p>-"{quote.quote_ans}."</p>}
          {!quote.quote_ans && <p>"{quote.quote}."</p>}
          <footer className='blockquote-footer'>
            {quote.author.author}
            {quote.context && <cite title='Source Title'>, {quote.context}</cite>}
            {quote.place && <cite title='Source Title'>, {quote.place}</cite>}
          </footer>
        </blockquote>
      </div>
    </div>
  )
}
export default QuoteCard
