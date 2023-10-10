//custom Hook
import { products as initialProducts } from '../mocks/products.json'
import { useState, useContext } from 'react'
import { FiltersContext } from '../context/Filters.jsx'

export function useFilters(){
    const [products] = useState(initialProducts)
    // const [filters, setFilters] = useState({
    //   category: 'all',
    //   minPrice: 0
    // })
  
    // consumir el contexto.
    const {filters, setFilters} = useContext(FiltersContext) 
  
    const filteredProducts = products.filter(product =>{
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        ))
    })
    return {filteredProducts, filters, setFilters}
  }