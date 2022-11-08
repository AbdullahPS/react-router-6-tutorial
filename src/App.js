import { useState, React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'
import SingleProduct from './pages/SingleProduct'
import Home from './pages/Home'
import Products from './pages/Products'
import SharedLayout from './pages/SharedLayout'
import { ProtectedRoute } from './pages/ProtectedRoute'

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
