import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

import Header from './components/common/Header.jsx'

function HeaderContainer() {
  const { user, login, logout } = useAuth()
  return (
    <>
      <a href="#main" className="sr-only">Aller au contenu</a>
      <Header user={user?.name || null} onLogin={() => login('Invité')} onLogout={logout} />
    </>
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



