import React from 'react'
import { Link } from 'react-router-dom'
import MovieGrid from './MovieGrid.jsx'
import './MovieSection.css'

export default function MovieSection({ title, movies, linkTo }) {
  if (!movies || movies.length === 0) return null

  return (
    <section className="movie-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {linkTo && <Link to={linkTo} className="see-all">Voir tout</Link>}
      </div>
      <MovieGrid movies={movies.slice(0, 12)} />
    </section>
  )
}
