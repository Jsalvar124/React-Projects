/* eslint-disable react/prop-types */
import './Products.css' // import css
import { AddToCartIcon } from './Icons.jsx'
import { useFilters } from '../hooks/useFilters'


export function Products() {
  const {filteredProducts: products} = useFilters()
  return (
    <main className='products'>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          )
        }
        )}
      </ul>
    </main>
  )

}
