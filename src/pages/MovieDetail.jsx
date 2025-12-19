// MovieDetail page - displays single movie details
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchMovieById, IMAGE_BASE_URL } from '../api/tmdb'
import Loading from '../components/Loading'

const MovieDetail = () => {
  const { id } = useParams()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await fetchMovieById(id)
        setMovie(data)
      } catch (err) {
        console.error(err)
        setError(err.message || 'This movie is not available.')
        setMovie(null)
      } finally {
        setLoading(false)
      }
    }

    getMovie()
  }, [id])

  // Loading state with spinner
  if (loading) {
    return <Loading message="Loading movie details..." />
  }

  if (!movie) {
    return (
      <main id="main-content" style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
        <Link to="/">← Back</Link>
        <h1>Movie not available</h1>
        <p>{error || 'This movie is not available.'}</p>
      </main>
    )
  }

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : null

  const year = movie.release_date ? movie.release_date.slice(0, 4) : '—'
  const rating =
    typeof movie.vote_average === 'number' ? movie.vote_average.toFixed(1) : '—'
  const runtime = movie.runtime ? `${movie.runtime} min` : '—'
  const genres = movie.genres?.length
    ? movie.genres.map((g) => g.name).join(', ')
    : '—'

  return (
    <main id="main-content" style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
      <nav aria-label="Navigation" style={{ marginBottom: '16px' }}>
        <Link
          to="/"
          aria-label="Back to popular movies"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 500
          }}
        >
          <span aria-hidden="true">←</span>
          <span>Back to popular movies</span>
        </Link>

      </nav>

      <section
        aria-label="Movie details"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(220px, 320px) 1fr',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <div>
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={`Poster for ${movie.title}`}
              width="500"
              height="750"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '12px'
              }}
            />
          ) : (
            <div
              role="img"
              aria-label={`No poster available for ${movie.title}`}
              style={{
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: '#1a1a1a'
              }}
            >
              No poster available
            </div>
          )}
        </div>

        <div>
          <header>
            <h1 style={{ margin: 0 }}>
              {movie.title}{' '}
              <span style={{ opacity: 0.7, fontWeight: 400 }}>({year})</span>
            </h1>

            {movie.tagline ? (
              <p style={{ marginTop: '10px', opacity: 0.8 }}>{movie.tagline}</p>
            ) : null}
          </header>

          <section aria-label="Movie facts" style={{ marginTop: '16px' }}>
            <p style={{ margin: 0 }}>
              <strong>Rating:</strong> ⭐ {rating}
            </p>
            <p style={{ margin: '8px 0 0' }}>
              <strong>Runtime:</strong> {runtime}
            </p>
            <p style={{ margin: '8px 0 0' }}>
              <strong>Genres:</strong> {genres}
            </p>
          </section>

          <section aria-label="Overview" style={{ marginTop: '16px' }}>
            <h2 style={{ marginBottom: '8px' }}>Overview</h2>
            <p style={{ marginTop: 0, lineHeight: 1.5 }}>
              {movie.overview || 'No overview available.'}
            </p>
          </section>
        </div>
      </section>

      {/* Mobile: stack poster + content */}
      <style>{`
        @media (max-width: 700px) {
          main section {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}

export default MovieDetail
