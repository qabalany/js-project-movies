// MovieCard component - displays a single movie poster with title and year
import { IMAGE_BASE_URL } from '../api/tmdb'

const MovieCard = ({ movie }) => {
  // Styles for the card
  const cardStyle = {
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease'
  }

  const imageStyle = {
    width: '100%',
    display: 'block'
  }

  const contentStyle = {
    padding: '12px'
  }

  const titleStyle = {
    margin: '0 0 8px 0',
    fontSize: '1rem',
    color: '#fff'
  }

  const yearStyle = {
    margin: 0,
    color: '#888',
    fontSize: '0.9rem'
  }

  return (
    <div style={cardStyle}>
      <img 
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={`${movie.title} poster`}
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{movie.title}</h3>
        <p style={yearStyle}>{movie.release_date?.slice(0, 4)}</p>
      </div>
    </div>
  )
}

export default MovieCard
