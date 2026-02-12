
import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    // log error if needed
  }
  render() {
    if (this.state.hasError) {
      return <div style={{color: 'red', padding: 32, fontSize: 20}}>Une erreur est survenue : {String(this.state.error)}</div>
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider>
          <FavoritesProvider>
            <Outlet />
          </FavoritesProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}



