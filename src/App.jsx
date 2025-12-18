import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

export const App = () => {
  return (
    // Routes container - only one route matches at a time
    <Routes>
      {/* Home page - shows at root URL "/" */}
      <Route path="/" element={<Home />} />
      
      {/* Movie detail page - :id is a dynamic parameter */}
      {/* Example: /movies/123 → id = "123" */}
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  )
}
