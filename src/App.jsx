import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

function Header() {
  const { user, login, logout } = useAuth()
  return (
    <header className="px-6 py-4 border-b border-neutral-800 flex items-center gap-4">
      <Link to="/" className="text-xl font-semibold">StreamzaX</Link>
      <nav className="flex items-center gap-4 text-sm text-neutral-300">
        <Link to="/">Accueil</Link>
      </nav>
      <div className="flex-1" />
      {user ? (
        <button onClick={logout} className="text-sm text-neutral-300">Se déconnecter</button>
      ) : (
        <button onClick={() => login('Invité')} className="text-sm text-neutral-300">Se connecter</button>
      )}
    </header>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <FavoritesProvider>
          <Outlet /> 
        </FavoritesProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}



