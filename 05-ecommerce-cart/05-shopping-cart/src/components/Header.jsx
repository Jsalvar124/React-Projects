/* eslint-disable react/prop-types */
import {Filters} from './Filters.jsx'

export function Header ({setFilters}) {
    return (
        <header>
            <h2>React Shop</h2>
            <Filters setFilters={setFilters} />
        </header>
    )
}