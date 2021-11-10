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
      </header>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  )
}

export default App
