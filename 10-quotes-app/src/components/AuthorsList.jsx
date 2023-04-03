import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AuthorsList () {
  const [authors, setAuthorsList] = useState([])
  const [loading, setIsLoading] = useState(true)

  const authorsEndpoint = 'https://escriturras.onrender.com/authors'

  useEffect(() => {
    fetch(authorsEndpoint)
      .then(response => {
        return response.json()
      })
      .then(authors => {
        console.log(authors.data)
        console.log('RENDER')
        setAuthorsList(authors.data)
      })
      .catch(error => console.log(error))
      .finally(
        setIsLoading(!loading)
      )
  }, [])

  return (
    <>
      <ol className='list-group list-group-numbered'>
        {authors.map((author, id) => {
          return (
            <Link style={{ textDecoration: 'none' }} key={id} to={`/authors/${author.id}`}><li className='list-group-item list-group-item-light list-group-item-action my-1'>{author.author}</li></Link>
          )
        })}
      </ol>
    </>
  )
}

export default AuthorsList
