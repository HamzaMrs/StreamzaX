import React from 'react'
import './MovieSearch.css'

export default function MovieSearch({ query, setQuery }) {
  return (
    <div className="search" role="search">
      <label htmlFor="search-input" className="sr-only">Rechercher un film</label>
      <input
        id="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un film..."
        aria-label="Rechercher un film"
      />
      <button onClick={() => setQuery('')}>Effacer</button>
    </div>
  )
}


