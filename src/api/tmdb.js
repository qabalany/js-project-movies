// TMDB API Configuration
// Documentation: https://developer.themoviedb.org/docs

// Base URL for all API requests
const BASE_URL = 'https://api.themoviedb.org/3'

// Base URL for images (w500 = 500px width)
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

// API Read Access Token (Bearer token)
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGI3OTc0N2NjNWY2MmU0ZTBkY2VlMzRlNjUzYzNhZSIsIm5iZiI6MTc2NTc5NzQyMC4wNTIsInN1YiI6IjY5M2ZlZTJjODcyYzFmNDZlYjk5ZjgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nWOYV6C-z9bboFAn8nSYG8dlP3g8WCkD1ovUlGJYBao'

// Default options for all fetch requests
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
}

// Fetch popular movies
export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, options)
  if (!response.ok) {
    throw new Error('Failed to fetch popular movies')
  }
  return response.json()
}

// Fetch movies by category (popular, top_rated, upcoming, now_playing)
export const fetchMoviesByCategory = async (category = 'popular') => {
  const response = await fetch(`${BASE_URL}/movie/${category}`, options)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${category} movies`)
  }
  return response.json()
}

// Fetch movies by genre ID
export const fetchMoviesByGenre = async (genreId) => {
  const response = await fetch(`${BASE_URL}/discover/movie?with_genres=${genreId}`, options)
  if (!response.ok) {
    throw new Error('Failed to fetch movies by genre')
  }
  return response.json()
}

// Fetch all genres list
export const fetchGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list`, options)
  if (!response.ok) {
    throw new Error('Failed to fetch genres')
  }
  return response.json()
}

// Fetch single movie details by ID
export const fetchMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}`, options)
  if (!response.ok) {
    throw new Error('Failed to fetch movie details')
  }
  return response.json()
}
