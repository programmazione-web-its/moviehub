import { useState, useEffect } from 'react'
import MoviesContext from '../store/movies-context'
import movies from '../../data/movies'

export default function MoviesContextProvider({ children }) {
  const [moviesList, setMoviesList] = useState(() => {
    const savedMovies = localStorage.getItem('savedMovies')
    return savedMovies ? JSON.parse(savedMovies) : movies
  })
  const [searchTerm, setSearchTerm] = useState('')
  const filteredMovies = moviesList.filter((el) =>
    el.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const favoriteMovies = filteredMovies.filter((el) => el.favorite)
  function handleFavourites(id) {
    setMoviesList((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, favorite: !el.favorite } : { ...el },
      ),
    )
  }

  useEffect(() => {
    if (!moviesList) return
    localStorage.setItem('savedMovies', JSON.stringify(moviesList))
  }, [moviesList])

  const ctx = {
    moviesList,
    setMoviesList,
    favoriteMovies,
    handleFavourites,
    searchTerm,
    setSearchTerm,
    filteredMovies,
  }
  return <MoviesContext.Provider value={ctx}>{children}</MoviesContext.Provider>
}
