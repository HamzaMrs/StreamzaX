import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import Search from './pages/Search.jsx'
import Favorites from './pages/Favorites.jsx'
import Category from './pages/Category.jsx'

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="popular" element={<Category category="popular" />} />
          <Route path="top-rated" element={<Category category="top-rated" />} />
          <Route path="now-playing" element={<Category category="now-playing" />} />
          <Route path="upcoming" element={<Category category="upcoming" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


