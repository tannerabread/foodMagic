import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Search from './routes/search'
import Browse from './routes/browse'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/browse" element={<Browse />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)