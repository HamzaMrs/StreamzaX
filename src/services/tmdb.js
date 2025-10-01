const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e4b90327227c88daac14c0bd0c1f93cd';

async function request(path) {
  const url = `${TMDB_BASE_URL}${path}${path.includes('?') ? '&' : '?'}api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`TMDB error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function getTrendingMovies(page = 1) {
  return request(`/trending/movie/week?page=${page}`);
}

export async function searchMovies(query, page = 1) {
  const encoded = encodeURIComponent(query);
  return request(`/search/movie?query=${encoded}&page=${page}&include_adult=false`);
}

export async function getMovieDetail(id) {
  return request(`/movie/${id}`);
}