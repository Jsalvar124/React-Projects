import { useState } from 'react'
import './App.css'
import { Products } from './components/Products.jsx'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'

function App() {

  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filteredProducts = products.filter(product =>{
    return (
      product.price >= filters.minPrice &&
      (
        filters.category === 'all' ||
        filters.category === product.category
      ))
  })

  return (
    // setFilters prop drilling debe llegar al componente filters. App -> Headers -> Filters, por qué? puesto que el filtro inicial
    // el estado inicial de filters, se necesita para renderizar los productos.
    <>
      <Header setFilters={setFilters}/> 
      <Products products={filteredProducts} />
    </>
  )
}

export default App
