import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App.jsx'

import './index.css'

// BrowserRouter wraps the entire app to enable routing
// It uses the browser's History API to keep UI in sync with URL
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
