import React from 'react'
import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}


