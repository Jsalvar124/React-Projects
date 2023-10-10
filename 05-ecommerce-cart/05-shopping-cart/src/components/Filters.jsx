/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Filters.css'
export function Filters ({setFilters}) {

    const [minPrice, setMinPrice] = useState(0)


    const handleChangeMinPrice = (event)=>{
        setMinPrice(event.target.value)
        setFilters(prevState=>({
          ...prevState, // spread operator to get the rest of the object as it was originally.
          minPrice: event.target.value  // overwrite only min price ,the state filters is originally {category: 'all', minPrice: 0}
        }))
    }

    const handleChangeCategory = (event)=>{
        setFilters(prevState=>({
            ...prevState,
            category: event.target.value
        }))
    }


    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio</label>
                <input 
                type="range" 
                id="price"
                min="0"
                max="1000" 
                onChange={handleChangeMinPrice}
                />
            <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>

                </select>
            </div>
        </section>
    )
}