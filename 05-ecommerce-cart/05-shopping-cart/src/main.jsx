import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {FiltersProvider} from './context/Filters.jsx'
import './index.css'
// envolver con el FiltersProvider los elementos que tendran acceso al contexto.
ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
