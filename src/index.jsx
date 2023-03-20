import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BigButton } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div><App /><BigButton /></div>
  </React.StrictMode>
)