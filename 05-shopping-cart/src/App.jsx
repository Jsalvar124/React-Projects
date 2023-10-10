import Products from './components/Products.jsx'
import { products } from './mocks/products.json'

function App () {
  return (
    <Products products={products} />
  )
}

export default App
