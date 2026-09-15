import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MoviePicker from './pages/MoviePicker'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/picker" element={<MoviePicker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App