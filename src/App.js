import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search the <a
            className="App-link"
            href="https://spoonacular.com/"
            target="_blank"
            rel="noopener noreferrer"
          > Spoonacular API</a> for awesome recipes and information
        </p>
        <nav className="navbar">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/browse" className="navLink">Browse</Link>
          <Link to="/search" className="navLink">Search</Link>
        </nav>
      </header>
    </div>
  )
}

export default App
