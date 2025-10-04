import React from 'react'
import './TrailerModal.css'

export default function TrailerModal({ open, onClose, videoKey, title }) {
  if (!open) return null
  const src = videoKey ? `https://www.youtube.com/embed/${videoKey}?autoplay=1` : ''
  return (
    <div className="trailer-overlay" role="dialog" aria-modal="true">
      <div className="trailer-card">
        <div className="trailer-header">
          <div>{title || 'Bande-annonce'}</div>
          <button className="trailer-close" onClick={onClose}>Fermer</button>
        </div>
        {videoKey ? (
          <iframe
            className="trailer-iframe"
            title="Trailer"
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="p-6">Aucune bande-annonce disponible.</div>
        )}
      </div>
    </div>
  )
}
