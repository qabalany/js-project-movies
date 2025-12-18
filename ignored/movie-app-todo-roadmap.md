# 🎬 Movie App - TODO Roadmap

## Project Overview
Multi-page React app using themoviedb.org API to show movies list and details.

**Deadline:** December 21st  
**Pair/Solo:** Pairs recommended

---

## 📋 TODO Steps (8 commits)

### TODO 1: Setup Project & React Router ⚙️
**Goal:** Fork repo, install dependencies, setup React Router structure

**Tasks:**
- [ ] Fork and clone the repo
- [ ] Install react-router-dom: `npm install react-router-dom`
- [ ] Create basic folder structure
- [ ] Setup BrowserRouter in main.jsx
- [ ] Create placeholder pages (Home, MovieDetail)

**Files to create:**
```
src/
  pages/
    Home.jsx
    MovieDetail.jsx
  components/
    (empty for now)
```

**Git:** `git commit -m "Setup project with React Router structure"`

---

### TODO 2: Get TMDB API Key & Test 🔑
**Goal:** Register for API, test endpoints

**Tasks:**
- [ ] Register at themoviedb.org
- [ ] Get API key (v3)
- [ ] Test API in browser/Postman
- [ ] Create api.js config file

**Git:** `git commit -m "Add TMDB API configuration"`

---

### TODO 3: Fetch & Display Popular Movies 🎥
**Goal:** Home page shows list of popular movies

**Tasks:**
- [ ] Create useState for movies
- [ ] Create useEffect to fetch popular movies
- [ ] Display movie posters in a grid
- [ ] Add loading state

**API:** `https://api.themoviedb.org/3/movie/popular?api_key={key}`

**Git:** `git commit -m "Fetch and display popular movies on home page"`

---

### TODO 4: Add Movie Card Component 🃏
**Goal:** Create reusable MovieCard component with styling

**Tasks:**
- [ ] Create MovieCard.jsx component
- [ ] Style with Styled Components
- [ ] Show poster, title, release year
- [ ] Make it responsive

**Git:** `git commit -m "Add styled MovieCard component"`

---

### TODO 5: Link to Movie Detail Page 🔗
**Goal:** Click on movie card → navigate to detail page

**Tasks:**
- [ ] Wrap MovieCard in Link
- [ ] Setup route: `/movies/:id`
- [ ] Use useParams to get movie ID

**Git:** `git commit -m "Add navigation to movie detail page"`

---

### TODO 6: Fetch & Display Movie Details 📄
**Goal:** Detail page shows full movie info

**Tasks:**
- [ ] Fetch movie by ID using useParams
- [ ] Display backdrop image
- [ ] Show title, overview, rating, genres
- [ ] Add back button/link

**API:** `https://api.themoviedb.org/3/movie/{id}?api_key={key}`

**Git:** `git commit -m "Fetch and display movie details"`

---

### TODO 7: Styling & Responsive Design 🎨
**Goal:** Match example design, make responsive

**Tasks:**
- [ ] Style Home page (grid layout)
- [ ] Style Detail page (backdrop, overlay)
- [ ] Mobile styles (320px+)
- [ ] Tablet/Desktop styles

**Git:** `git commit -m "Add responsive styling"`

---

### TODO 8: Accessibility & Polish ♿
**Goal:** Lighthouse 95+, final touches

**Tasks:**
- [ ] Add alt text to all images
- [ ] Check color contrast
- [ ] Add aria-labels where needed
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit

**Git:** `git commit -m "Improve accessibility and final polish"`

---

## 🌟 Stretch Goals (VG - pick 2+)

### Stretch A: 404 Not Found Page
- Handle invalid movie IDs
- Show friendly error page
- Use .catch() on fetch

### Stretch B: Loading States
- Show spinner/skeleton while loading
- Handle image loading

### Stretch C: Category Dropdown
- Toggle between popular/upcoming/top_rated
- Update movie list based on selection

### Stretch D: Genre Links
- Show genres on detail page
- Link to genre pages

---

## 📁 Final Folder Structure
```
src/
  pages/
    Home.jsx
    MovieDetail.jsx
    NotFound.jsx (stretch)
  components/
    MovieCard.jsx
    MovieList.jsx
    Header.jsx
    Loading.jsx (stretch)
  api/
    tmdb.js
  App.jsx
  main.jsx
```

---

## 🔗 Useful Links
- [TMDB API Docs](https://developers.themoviedb.org/3)
- [React Router Docs](https://reactrouter.com/)
- [Example App](https://technigo-movies.netlify.app/)
