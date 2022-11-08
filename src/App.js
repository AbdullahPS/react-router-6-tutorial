import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'
import SingleProduct from './pages/SingleProduct'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
