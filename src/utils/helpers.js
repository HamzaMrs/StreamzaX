export function getImageUrl(path, size = 'w500') {
  if (!path) return null
  const base = import.meta.env.VITE_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p'
  return `${base}/${size}${path}`
}

export function formatVoteAverage(vote) {
  return vote ? Number(vote).toFixed(1) : '0.0'
}


