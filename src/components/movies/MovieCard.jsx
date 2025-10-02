import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl, formatVoteAverage } from '../../utils/helpers.js'
import { useFavorites } from '../../hooks/useFavorites.js'
import './MovieCard.css'

export default function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const poster = getImageUrl(movie.poster_path, 'w342')
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        {poster ? (
          <img src={poster} alt={movie.title} className="card-img" loading="lazy" />
        ) : (
          <div className="card-fallback" />
        )}
      </Link>
      <div className="card-meta">
        <h3 className="card-title">{movie.title}</h3>
        <span className="card-badge">★ {formatVoteAverage(movie.vote_average)}</span>
      </div>
      <button aria-label="toggle-favorite" onClick={() => toggleFavorite(movie.id)} className="fav-btn">
        {isFavorite(movie.id) ? '❤️' : '🤍'}
      </button>
    </div>
  )
}


