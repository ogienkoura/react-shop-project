import React from 'react'
import ReactDOM from 'react-dom/client'

function Header() {
    return (
        <h1>
            <h1>Hello app.js</h1>
        </h1>
    )
}

function AppList() {
    return (
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>
    )
}

function App() {
    return (
        <>
            <Header />
            <AppList />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
