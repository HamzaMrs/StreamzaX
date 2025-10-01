import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import MovieGrid from '../components/movies/MovieGrid.jsx'
import { useFavorites } from '../hooks/useFavorites.js'
import { getMovieDetail } from '../services/tmdb.js'

export default function Favorites() {
  const { favorites } = useFavorites()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    let cancelled = false
    Promise.all(favorites.map((id) => getMovieDetail(id))).then((res) => {
      if (!cancelled) setMovies(res)
    })
    return () => {
      cancelled = true
    }
  }, [favorites])

  return (
    <Layout>
      <div className="px-6 py-6 space-y-6">
        <h1 className="text-2xl font-semibold">Mes favoris</h1>
        <MovieGrid movies={movies} />
      </div>
    </Layout>
  )
}


