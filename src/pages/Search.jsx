import React, { useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import MovieSearch from '../components/movies/MovieSearch.jsx'
import MovieGrid from '../components/movies/MovieGrid.jsx'
import { useSearch } from '../hooks/useMovies.js'

export default function Search() {
  const [query, setQuery] = useState('')
  const state = useSearch(query, 1)
  return (
    <Layout>
      <div className="px-6 py-6 space-y-6">
        <div className="flex items-center gap-3">
          <MovieSearch query={query} setQuery={setQuery} />
        </div>
        {state.loading && <p>Chargement...</p>}
        {state.error && <p className="text-red-400">Erreur: {state.error}</p>}
        {state.data && <MovieGrid movies={state.data.results} />}
      </div>
    </Layout>
  )
}


