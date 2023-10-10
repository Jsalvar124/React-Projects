import './App.css'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer'
// import { useFilters } from './hooks/useFilters.jsx'

function App() {

  // se saca la lógica por fuera del componente, y se reduce a una función como una "caja negra", los custom hooks siempre deben empezar por use___
  // const {filters} = useFilters()

  return (
    // setFilters prop drilling debe llegar al componente filters. App -> Headers -> Filters, por qué? puesto que el filtro inicial
    // el estado inicial de filters, se necesita para renderizar los productos.
    <>
      <Header /> 
      <Products />
      <Footer />
    </>
  )
}

export default App
