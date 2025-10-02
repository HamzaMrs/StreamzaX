import { useEffect, useState } from 'react'
import { getTrendingMovies, getPopularMovies, getTopRatedMovies } from '../services/tmdb.js'

export function useMultipleMovies() {
  const [trending, setTrending] = useState({ data: null, loading: true, error: null })
  const [popular, setPopular] = useState({ data: null, loading: true, error: null })
  const [topRated, setTopRated] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false

    // Fetch trending
    getTrendingMovies(1)
      .then((data) => !cancelled && setTrending({ data, loading: false, error: null }))
      .catch((e) => !cancelled && setTrending({ data: null, loading: false, error: e.message }))

    // Fetch popular
    getPopularMovies(1)
      .then((data) => !cancelled && setPopular({ data, loading: false, error: null }))
      .catch((e) => !cancelled && setPopular({ data: null, loading: false, error: e.message }))

    // Fetch top rated
    getTopRatedMovies(1)
      .then((data) => !cancelled && setTopRated({ data, loading: false, error: null }))
      .catch((e) => !cancelled && setTopRated({ data: null, loading: false, error: e.message }))

    return () => {
      cancelled = true
    }
  }, [])

  return { trending, popular, topRated }
}
