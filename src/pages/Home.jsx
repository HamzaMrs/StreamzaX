import React, { useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import HeroSection from '../components/layout/HeroSection.jsx'
import MovieSearch from '../components/movies/MovieSearch.jsx'
import MovieSection from '../components/movies/MovieSection.jsx'
import MovieGrid from '../components/movies/MovieGrid.jsx'
import { useSearch } from '../hooks/useMovies.js'
import { useMultipleMovies } from '../hooks/useMultipleMovies.js'
import { getImageUrl } from '../utils/helpers.js'

export default function Home() {
  const [query, setQuery] = useState('')
  const search = useSearch(query, 1)
  const { trending, popular, topRated } = useMultipleMovies()
  
  const isSearching = query.trim().length > 0
  const heroMovie = trending.data?.results?.[0]

  return (
    <Layout>
      {heroMovie && !isSearching && (
        <HeroSection
          title={heroMovie.title}
          overview={heroMovie.overview}
          backdropUrl={getImageUrl(heroMovie.backdrop_path, 'w780')}
          movieId={heroMovie.id}
        />
      )}

      <div className="px-6 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1" />
          <MovieSearch query={query} setQuery={setQuery} />
        </div>

        {isSearching && (
          <>
            {search.loading && <p>Chargement...</p>}
            {search.error && <p className="text-red-400">Erreur: {search.error}</p>}
            {search.data && <MovieGrid movies={search.data.results} />}
          </>
        )}

        {!isSearching && (
          <div id="sections">
            {popular.data && (
              <MovieSection
                title="Populaires"
                movies={popular.data.results}
                linkTo="/popular"
              />
            )}
            {topRated.data && (
              <MovieSection
                title="Mieux notés"
                movies={topRated.data.results}
                linkTo="/top-rated"
              />
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}


