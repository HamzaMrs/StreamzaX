import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

export default function HeroSection({ title, overview, backdropUrl, movieId, onPlay }) {
  const navigate = useNavigate()
  return (
    <section className="hero anim-fade-up in" aria-label={title}>
      {backdropUrl && <img src={backdropUrl} alt="" role="presentation" />}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h2 className="hero-title">{title}</h2>
        {overview && <p className="hero-overview">{overview}</p>}
        <div className="hero-actions">
          <button
            type="button"
            className="hero-btn hero-btn-primary hero-play-btn"
            onClick={(e) => {
              e.preventDefault()
              if (typeof onPlay === 'function') return onPlay()
              navigate(`/movie/${movieId}`)
            }}
            aria-label={`Regarder ${title}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="play-icon">
              <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
            </svg>
            <span>Regarder</span>
          </button>
          <a href="#sections" className="hero-btn hero-btn-secondary">
            ℹ Plus d'infos
          </a>
        </div>
      </div>
    </section>
  )
}


