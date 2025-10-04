import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getImageUrl, formatVoteAverage } from '../../utils/helpers.js'
import { useFavorites } from '../../hooks/useFavorites.js'
import './MovieCard.css'

export default function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const poster = getImageUrl(movie.poster_path, 'w342')
  const navigate = useNavigate()
  return (
    <div className="movie-card anim-pop">
      <div className="card-media" role="button" tabIndex={0} onClick={() => navigate(`/movie/${movie.id}`)} onKeyDown={(e) => e.key === 'Enter' && navigate(`/movie/${movie.id}`)}>
        {poster ? (
          <img src={poster} alt={movie.title} className="card-img" loading="lazy" />
        ) : (
          <div className="card-fallback" />
        )}
        <div className="card-play-overlay" aria-hidden>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
          </svg>
        </div>
      </div>
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


