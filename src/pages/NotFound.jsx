// 404 Not Found page
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}
    >
      <h1 style={{ fontSize: '4rem', margin: '0 0 16px 0' }}>404</h1>
      <h2 style={{ margin: '0 0 24px 0', fontWeight: 400 }}>Page Not Found</h2>
      <p style={{ marginBottom: '32px', opacity: 0.7 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#e50914',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 500
        }}
      >
        Back to Home
      </Link>
    </main>
  )
}

export default NotFound
