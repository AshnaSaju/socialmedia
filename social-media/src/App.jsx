import React from 'react'
import Feed from './components/Feed/Feed'
import Navbar from './components/Navbar/Navbar'
import "./app.css"

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Feed />
        </div>
    )
}

export default App