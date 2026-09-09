import { createBrowserRouter } from 'react-router-dom'

import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import MovieDetailPage from './pages/MovieDetailPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/favorites', element: <FavoritesPage /> },
      { path: '/movies/:movieId', element: <MovieDetailPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
