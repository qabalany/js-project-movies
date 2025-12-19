// Home page - displays list of movies by category or genre
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchMoviesByCategory, fetchMoviesByGenre, fetchGenres } from '../api/tmdb'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

// Available categories
const CATEGORIES = [
  { value: 'popular', label: 'Popular' },
  { value: 'top_rated', label: 'Top Rated' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'now_playing', label: 'Now Playing' }
]

const Home = () => {
  // Get URL search params for genre filtering
  const [searchParams, setSearchParams] = useSearchParams()
  const genreId = searchParams.get('genre')

  // State for storing movies array
  const [movies, setMovies] = useState([])
  // State for loading indicator
  const [loading, setLoading] = useState(true)
  // State for selected category
  const [category, setCategory] = useState('popular')
  // State for genre name (when filtering by genre)
  const [genreName, setGenreName] = useState('')

  // Fetch genre name if filtering by genre
  useEffect(() => {
    if (genreId) {
      const getGenreName = async () => {
        try {
          const data = await fetchGenres()
          const genre = data.genres.find(g => g.id === parseInt(genreId))
          setGenreName(genre?.name || 'Genre')
        } catch (error) {
          console.error('Error fetching genres:', error)
        }
      }
      getGenreName()
    }
  }, [genreId])

  // Fetch movies when component mounts, category changes, or genre changes
  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true)
        let data
        if (genreId) {
          data = await fetchMoviesByGenre(genreId)
        } else {
          data = await fetchMoviesByCategory(category)
        }
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    getMovies()
  }, [category, genreId])

  // Get current label for display
  const currentLabel = genreId ? genreName : (CATEGORIES.find(c => c.value === category)?.label || 'Movies')

  // Clear genre filter
  const clearGenreFilter = () => {
    setSearchParams({})
    setGenreName('')
  }

  return (
    <main id="main-content" style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <h1 style={{ fontSize: '2rem', margin: 0 }}>{currentLabel} Movies</h1>
        
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Clear genre filter button */}
          {genreId && (
            <button
              onClick={clearGenreFilter}
              style={{
                padding: '10px 16px',
                fontSize: '1rem',
                backgroundColor: '#e50914',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Clear Filter
            </button>
          )}
          
          {/* Category dropdown (hidden when filtering by genre) */}
          {!genreId && (
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Select movie category"
              style={{
                padding: '10px 16px',
                fontSize: '1rem',
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #555',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </header>

      {/* Loading state */}
      {loading ? (
        <Loading message={`Loading ${currentLabel.toLowerCase()} movies...`} />
      ) : (
        /* Movie grid */
        <section
          aria-label={`${currentLabel} movies grid`}
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
      )}
    </main>
  )
}

export default Home
