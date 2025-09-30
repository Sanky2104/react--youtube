import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App yo</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const User = "chai aur react"

const ReactElement2 = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click to visit google',
    User
)

createRoot(document.getElementById('root')).render(
    // <App />
    // 'sans'
    // MyApp()
    // <MyApp />
    // <ReactElement />
    // ReactElement
    // anotherElement
    ReactElement2
)
