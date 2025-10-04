import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import { useParams } from 'react-router-dom'
import { getMovieDetail, getMovieVideos } from '../services/tmdb.js'
import { getImageUrl } from '../utils/helpers.js'
import TrailerModal from '../components/movies/TrailerModal.jsx'

export default function MovieDetail() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [videos, setVideos] = useState([])
  const [trailerOpen, setTrailerOpen] = useState(false)
  const [activeVideoKey, setActiveVideoKey] = useState(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false
    setLoading(true)
    setError(null)
    getMovieDetail(Number(id))
      .then((d) => !cancelled && setData(d))
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false))
    // fetch videos
    getMovieVideos(Number(id))
      .then((res) => {
        if (!cancelled) setVideos((res.results || []).filter((v) => v.site === 'YouTube'))
      })
      .catch(() => {
        /* ignore video errors */
      })
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
              {videos.length > 0 && (
                <div>
                  <button
                    className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => {
                      const first = videos[0]
                      setActiveVideoKey(first.key)
                      setTrailerOpen(true)
                    }}
                  >
                    Voir la bande-annonce
                  </button>
                </div>
              )}
              <div className="text-sm text-neutral-400">{(data.genres || []).map((g) => g.name).join(' • ')} • {data.runtime ? `${data.runtime} min` : '—'}</div>
            </div>
          </div>
        </div>
      )}
      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} videoKey={activeVideoKey} title={data?.title} />
    </Layout>
  )
}


