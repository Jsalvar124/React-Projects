import './Products.css'
import { AddToCartIcon } from './Icons'

import React from 'react'

const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <img // you can nest various elements inside a li element.
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <h3>{product.title} - ${product.price}</h3>
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

    </main>
  )
}

export default Products
