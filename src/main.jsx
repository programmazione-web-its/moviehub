import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import MoviesContextProvider from './providers/MoviesContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </StrictMode>,
)
