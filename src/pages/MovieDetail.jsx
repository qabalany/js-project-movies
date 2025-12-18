// MovieDetail page - displays single movie details
// useParams hook gets the movie ID from the URL
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  // Get the movie ID from URL (e.g., /movies/123 → id = "123")
  const { id } = useParams()

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Movie ID: {id}</p>
      <p>Movie details will appear here...</p>
    </div>
  )
}

export default MovieDetail
