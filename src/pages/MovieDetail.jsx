import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../services/tmdb.js'
import { getImageUrl } from '../utils/helpers.js'

export default function MovieDetail() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false
    setLoading(true)
    setError(null)
    getMovieDetail(Number(id))
      .then((d) => !cancelled && setData(d))
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [id])

  return (
    <Layout>
      {loading && <div className="p-6">Chargement...</div>}
      {error && <div className="p-6 text-red-400">Erreur: {error}</div>}
      {!loading && !error && data && (
        <div className="pb-10">
          {getImageUrl(data.backdrop_path, 'w780') && (
            <div className="relative h-56 md:h-80 lg:h-96">
              <img src={getImageUrl(data.backdrop_path, 'w780')} alt={data.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          )}
          <div className="px-6 -mt-20 relative z-10 flex gap-6">
            {getImageUrl(data.poster_path, 'w342') && <img src={getImageUrl(data.poster_path, 'w342')} alt={data.title} className="w-32 md:w-44 rounded-md shadow-lg" />}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">{data.title}</h1>
              <p className="text-neutral-300 text-sm md:text-base max-w-3xl">{data.overview}</p>
              <div className="text-sm text-neutral-400">{(data.genres || []).map((g) => g.name).join(' • ')} • {data.runtime ? `${data.runtime} min` : '—'}</div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}


