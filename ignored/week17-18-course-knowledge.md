# 📚 Week 17-18 Course Knowledge

## 🎯 Week 17: React Router

### Topics
- Building multi-page applications
- React Router library
- Dynamic routes with useParams
- Combining useState with useEffect for API calls

### Key Concepts

#### React Router Basics
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies/:id" element={<MovieDetail />} />
  </Routes>
</BrowserRouter>
```

#### useParams Hook
```jsx
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams()  // Gets :id from URL
  // Use id to fetch movie details
}
```

#### Link Component
```jsx
import { Link } from 'react-router-dom'

<Link to={`/movies/${movie.id}`}>
  {movie.title}
</Link>
```

---

## 🎯 Week 18: Global State Management

### Topics
- Global State vs Local State
- React Context API
- Zustand library
- Design hacks for non-designers

### Key Concepts

#### Why Global State?
- Avoid prop drilling (passing props through many levels)
- Share state across unrelated components
- Centralized state management

#### Context API
```jsx
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Usage in any component
const { theme } = useContext(ThemeContext)
```

#### Zustand (Simpler Alternative)
```jsx
import { create } from 'zustand'

const useStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),
  removeTask: (id) => set((state) => ({ 
    tasks: state.tasks.filter(t => t.id !== id) 
  })),
}))

// Usage in any component
const { tasks, addTask } = useStore()
```

---

## 📋 Allowed Technologies

### Week 17 (Movie App)
- ✅ React Router (`react-router-dom`)
- ✅ useParams hook
- ✅ Link component
- ✅ useState, useEffect
- ✅ Styled Components
- ✅ Fetch API

### Week 18 (Todo App)
- ✅ Zustand (required - no prop drilling!)
- ✅ Context API (alternative)
- ✅ All previous technologies

---

## 🎬 Project 3: Movie App (Week 17)

### Deadline: December 21st

### Requirements
- At least 2 pages (list + detail)
- Use React Router
- Follow example design
- Responsive (320px - 1600px)
- Lighthouse score 95+
- Alt attributes on images
- Good color contrast

### API: themoviedb.org
- Popular movies: `https://api.themoviedb.org/3/movie/popular?api_key={key}`
- Movie details: `https://api.themoviedb.org/3/movie/{id}?api_key={key}`
- Image URL: `https://image.tmdb.org/t/p/w500{poster_path}`

### Stretch Goals (VG)
- 404 page for invalid movie ID
- Loading states
- Dropdown to switch between popular/upcoming/new
- Links to genres/collections

---

## ✅ Project 4: Todo App (Week 18)

### Deadline: January 18th

### Requirements
- Use Zustand (no prop drilling!)
- List all tasks
- Toggle complete/uncomplete
- Add and remove tasks
- Show task count
- Empty state design
- Responsive + Accessible

### Stretch Goals (VG)
- Timestamps with date-fns
- Complete all button
- Dark/light mode
- Local storage
- Due dates
- Filters
- Categories/tags
