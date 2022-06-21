import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './container/App/App'
<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
=======
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
