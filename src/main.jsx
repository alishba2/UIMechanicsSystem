import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
/* The following line can be included in a src/App.scss */
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
