import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Homepage</div>}></Route>
        <Route
          path="testing"
          element={
            <div>
              <h2>Testing</h2>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
