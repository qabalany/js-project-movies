// Home page - displays list of popular movies 
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchPopularMovies } from '../api/tmdb'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

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

  // Show loading spinner while fetching
  if (loading) {
    return <Loading message="Loading movies..." />
  }

  return (
    <main id="main-content" style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', margin: 0 }}>Popular Movies</h1>
      </header>

      {/* Movie grid */}
      <section
        aria-label="Popular movies grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '20px'
        }}
      >
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            aria-label={`View details for ${movie.title}`}
            style={{
              transition: 'transform 0.2s ease',
              display: 'block'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home
