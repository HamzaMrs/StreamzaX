import { useEffect, useState } from 'react'
import { getTrendingMovies, searchMovies } from '../services/tmdb.js'

export function useTrending(page = 1) {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState((s) => ({ ...s, loading: true, error: null }))
    getTrendingMovies(page)
      .then((data) => !cancelled && setState({ data, loading: false, error: null }))
      .catch((e) => !cancelled && setState({ data: null, loading: false, error: e.message }))
    return () => {
      cancelled = true
    }
  }, [page])

  return state
}

export function useSearch(query, page = 1) {
  const [state, setState] = useState({ data: null, loading: false, error: null })

  useEffect(() => {
    if (!query) return
    let cancelled = false
    setState({ data: null, loading: true, error: null })
    searchMovies(query, page)
      .then((data) => !cancelled && setState({ data, loading: false, error: null }))
      .catch((e) => !cancelled && setState({ data: null, loading: false, error: e.message }))
    return () => {
      cancelled = true
    }
  }, [query, page])

  return state
}


