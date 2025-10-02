import React from 'react'
import './HeroSection.css'

export default function HeroSection({ title, overview, backdropUrl, movieId }) {
  return (
    <section className="hero" aria-label={title}>
      {backdropUrl && <img src={backdropUrl} alt="" role="presentation" />}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h2 className="hero-title">{title}</h2>
        {overview && <p className="hero-overview">{overview}</p>}
        <div className="hero-actions">
          <a href={`/movie/${movieId}`} className="hero-btn hero-btn-primary">
            ▶ Regarder
          </a>
          <a href="#sections" className="hero-btn hero-btn-secondary">
            ℹ Plus d'infos
          </a>
        </div>
      </div>
    </section>
  )
}


