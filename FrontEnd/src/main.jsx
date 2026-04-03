import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import KeycloakProvider from './auth/KeycloakProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KeycloakProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </KeycloakProvider>
  </StrictMode>,
)
