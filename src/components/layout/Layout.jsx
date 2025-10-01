import React from 'react'
import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}


