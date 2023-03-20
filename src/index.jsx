import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BigButton, List } from './App'

// Example of imperative coding
// If you also wanted to include the list function contents you would 
// continue to add content and elements to build it.
// -------------------------------------------------
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way"
// h1.className = "header"
// document.getElementById("root").append(h1)

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <List />
  </div>
)

ReactDOM.createRoot(document.getElementById('buttons')).render(
  <div>
    <BigButton />
  </div>
)

