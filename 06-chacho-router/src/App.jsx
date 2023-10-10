import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>Ejemplo React Router</p>
      <a href='/about'>Acerca de</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://unavatar.io/jsalvar124' alt='Imagen Julián' />
        <p>Hola soy Julián y estoy haciendo un clon Router para React</p>
        <a href='/'>Ir al Home</a>
      </div>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
