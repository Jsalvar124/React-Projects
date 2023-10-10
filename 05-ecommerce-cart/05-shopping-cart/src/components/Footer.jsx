import './Footer.css'
import { useFilters } from '../hooks/useFilters'

/* eslint-disable react/prop-types */
export function Footer(){
    const {filters} = useFilters()
    return(
        <footer className="footer">
            {JSON.stringify(filters, 'utf-8')}
        </footer>
    )
}