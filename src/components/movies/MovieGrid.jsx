import React from 'react'
import MovieCard from './MovieCard.jsx'
import './MovieGrid.css'

export default function MovieGrid({ movies = [] }) {
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  )
}


