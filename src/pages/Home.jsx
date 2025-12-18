// Home page - displays list of popular movies
import { useState, useEffect } from 'react'
import { fetchPopularMovies, IMAGE_BASE_URL } from '../api/tmdb'

const Home = () => {
  // State for storing movies array
  const [movies, setMovies] = useState([])
  // State for loading indicator
  const [loading, setLoading] = useState(true)

  // Fetch movies when component mounts (empty dependency array = run once)
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchPopularMovies()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    getMovies()
  }, [])

  // Show loading message while fetching
  if (loading) {
    return <p>Loading movies...</p>
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      
      {/* Movie grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: 'center' }}>
            <img 
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.slice(0, 4)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
