import React from 'react'

export default function MovieSearch({ query, setQuery }) {
  return (
    <div className="flex items-center gap-3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un film..."
        className="w-full sm:w-80 rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm outline-none focus:border-neutral-500"
      />
      <button onClick={() => setQuery('')} className="text-sm text-neutral-300">Effacer</button>
    </div>
  )
}


