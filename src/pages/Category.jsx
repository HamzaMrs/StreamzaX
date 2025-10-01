import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import MovieGrid from '../components/movies/MovieGrid.jsx'
import { useSearchParams } from 'react-router-dom'
import { searchMovies } from '../services/tmdb.js'

export default function Category() {
  const [params] = useSearchParams()
  const genre = params.get('genre') || ''
  const [state, setState] = useState({ data: null, loading: false, error: null })

  useEffect(() => {
    let cancelled = false
    if (!genre) return
    setState({ data: null, loading: true, error: null })
    // Simplification: filter via query term
    searchMovies(genre, 1)
      .then((d) => !cancelled && setState({ data: d, loading: false, error: null }))
      .catch((e) => !cancelled && setState({ data: null, loading: false, error: e.message }))
    return () => {
      cancelled = true
    }
  }, [genre])

  return (
    <Layout>
      <div className="px-6 py-6 space-y-6">
        <h1 className="text-2xl font-semibold">Catégorie: {genre || '—'}</h1>
        {state.loading && <p>Chargement...</p>}
        {state.error && <p className="text-red-400">Erreur: {state.error}</p>}
        {state.data && <MovieGrid movies={state.data.results} />}
      </div>
    </Layout>
  )
}


