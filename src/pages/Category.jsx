import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import MovieGrid from '../components/movies/MovieGrid.jsx'
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getUpcomingMovies } from '../services/tmdb.js'

const categoryMap = {
  'popular': { title: 'Films populaires', fetch: getPopularMovies },
  'top-rated': { title: 'Mieux notés', fetch: getTopRatedMovies },
  'now-playing': { title: 'Au cinéma', fetch: getNowPlayingMovies },
  'upcoming': { title: 'Prochainement', fetch: getUpcomingMovies }
}

export default function Category({ category }) {
  const [state, setState] = useState({ data: null, loading: true, error: null })
  const categoryInfo = categoryMap[category] || { title: 'Catégorie', fetch: getPopularMovies }

  useEffect(() => {
    let cancelled = false
    setState({ data: null, loading: true, error: null })
    categoryInfo.fetch(1)
      .then((d) => !cancelled && setState({ data: d, loading: false, error: null }))
      .catch((e) => !cancelled && setState({ data: null, loading: false, error: e.message }))
    return () => {
      cancelled = true
    }
  }, [category])

  return (
    <Layout>
      <div className="px-6 py-6 space-y-6">
        <h1 className="text-2xl font-semibold">{categoryInfo.title}</h1>
        {state.loading && <p>Chargement...</p>}
        {state.error && <p className="text-red-400">Erreur: {state.error}</p>}
        {state.data && <MovieGrid movies={state.data.results} />}
      </div>
    </Layout>
  )
}


