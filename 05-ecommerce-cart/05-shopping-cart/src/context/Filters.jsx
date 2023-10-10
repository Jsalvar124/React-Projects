/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";


//1. crear el contexto, llama al hoook
export const FiltersContext = createContext();
//2. crear el proveedor de contexto, este envuelve a los componentes que tienen acceso al contexto
//estos componentes se pasan como children

export function FiltersProvider({children}){
    // estado Global de los filtros.
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 500
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
          }}
        >
            {children}
        </FiltersContext.Provider>
    )
} 