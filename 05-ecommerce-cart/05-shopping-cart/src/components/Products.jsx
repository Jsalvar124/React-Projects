/* eslint-disable react/prop-types */
import './Products.css' // import css
import { AddToCartIcon } from './Icons.jsx'

export function Products({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.slice(0,15).map((product) => {
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
