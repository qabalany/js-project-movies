# Movie App - Project Status

## Completed Tasks

### TODO 1: Setup Project & React Router
- Installed `react-router-dom`
- Created folder structure: `pages/`, `components/`, `api/`
- Setup BrowserRouter in `main.jsx`
- Created routes in `App.jsx`:
  - `/` → Home page
  - `/movies/:id` → MovieDetail page

### TODO 2: TMDB API Configuration
- Created `src/api/tmdb.js` with:
  - `fetchPopularMovies()` - fetches popular movies list
  - `fetchMovieById(id)` - fetches single movie details
  - `IMAGE_BASE_URL` - for movie poster images
- API uses Bearer token authentication

### TODO 3: Fetch & Display Popular Movies
- Home page fetches movies on load using `useEffect`
- Movies displayed in responsive grid
- Loading state shows "Loading movies..."

### TODO 4: MovieCard Component
- Created reusable `MovieCard.jsx` component
- Shows poster, title, and release year
- Styled with dark theme

---

## Files Created/Modified

```
src/
  api/
    tmdb.js           ← API configuration and fetch functions
  components/
    MovieCard.jsx     ← Movie card component
  pages/
    Home.jsx          ← Home page with movie grid
    MovieDetail.jsx   ← Detail page (placeholder)
  App.jsx             ← Routes setup
  main.jsx            ← BrowserRouter wrapper
```

---

## Remaining Tasks (Pick what you want)

### TODO 5: Link to Movie Detail Page
- Wrap MovieCard in `<Link>` component
- Navigate to `/movies/{id}` on click
- File to edit: `src/components/MovieCard.jsx`

### TODO 6: Fetch & Display Movie Details
- Use `useParams()` to get movie ID from URL
- Fetch movie details using `fetchMovieById(id)`
- Display: backdrop image, title, overview, rating, genres
- Add back button to return to home
- File to edit: `src/pages/MovieDetail.jsx`

### TODO 7: Styling
- Style Home page grid
- Style Detail page with backdrop overlay
- Mobile responsive (320px+)
- Tablet/Desktop styles

### TODO 8: Accessibility
- Alt text on all images
- Color contrast check
- Aria-labels where needed
- Keyboard navigation
- Lighthouse audit (target: 95+)

---

## How to Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## API Reference

```javascript
// Import functions
import { fetchPopularMovies, fetchMovieById, IMAGE_BASE_URL } from './api/tmdb'

// Fetch all popular movies
const data = await fetchPopularMovies()
console.log(data.results) // Array of movies

// Fetch single movie
const movie = await fetchMovieById(123)

// Get poster image URL
const posterUrl = `${IMAGE_BASE_URL}${movie.poster_path}`
```

---

## Git Commits So Far

1. `Setup project with React Router structure`
2. `Add TMDB API configuration`
3. `Fetch and display popular movies on home page`
4. `Add styled MovieCard component` (pending)
