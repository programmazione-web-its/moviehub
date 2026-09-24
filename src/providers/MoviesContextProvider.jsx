import { useState, useEffect } from 'react'
import MoviesContext from '../store/movies-context'

import { useFetch } from '../hooks/useFetch'

export default function MoviesContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = useFetch('movie/popular')
  const [favoriteIds, setFavoriteIds] = useState([])

  const moviesList = (data?.results ?? []).map((m) => ({
    ...m,
    favorite: favoriteIds.includes(m.id),
  }))

  const filteredMovies = moviesList.filter((el) =>
    el.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const favoriteMovies = filteredMovies.filter((el) => el.favorite)
  function handleFavourites(id) {
    setFavoriteIds(
      (prev) =>
        prev.includes(id)
          ? prev.filter((favId) => favId !== id) // era preferito → lo tolgo
          : [...prev, id], // non lo era → lo aggiungo
    )
  }

  useEffect(() => {
    if (!moviesList.length === 0) return
    localStorage.setItem('savedMovies', JSON.stringify(moviesList))
  }, [moviesList])

  const ctx = {
    moviesList,
    favoriteMovies,
    handleFavourites,
    searchTerm,
    setSearchTerm,
    filteredMovies,
    error,
    loading: isLoading,
  }
  return <MoviesContext.Provider value={ctx}>{children}</MoviesContext.Provider>
}
