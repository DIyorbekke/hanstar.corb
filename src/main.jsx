import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./i18next/i18next.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={(<div>Loading...</div>)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
)
