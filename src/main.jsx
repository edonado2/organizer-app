import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LifeApp from './LifeApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LifeApp/>
    </BrowserRouter>
  </StrictMode>,
)
