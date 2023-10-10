/* eslint-disable react/prop-types */
import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'


export function Filters () {

    // const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const {filters, setFilters} = useFilters()

    console.log(minPriceFilterId, categoryFilterId)


    const handleChangeMinPrice = (event)=>{
        // setMinPrice(event.target.value)

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
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input 
                type="range" 
                // id="price" // este Id puede resultar problemático, porque podría repetirse en otro lado en una app grande, por eso reemplazamos por useId
                id = {minPriceFilterId}
                min="0"
                max="1000" 
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
            <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>

                </select>
            </div>
        </section>
    )
}