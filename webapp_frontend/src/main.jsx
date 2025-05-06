import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// Supports weights 300-700
import '@fontsource-variable/red-hat-text';
// Supports weights 100-900
import '@fontsource-variable/lexend-deca';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
