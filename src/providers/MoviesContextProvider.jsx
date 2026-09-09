import { useState, useEffect } from 'react'
import MoviesContext from '../store/movies-context'

export default function MoviesContextProvider({ children }) {
  const [moviesList, setMoviesList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState()
  const [loading, setIsLoading] = useState()
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

  const getMovies = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDU1M2VmZWMwNzRjOGJjZGM2YzFlMDJmODZjZTgwNSIsIm5iZiI6MTc0ODY4NDg0OC4xNjIsInN1YiI6IjY4M2FkMDMwZGFhNzJmZmMzN2ZkYTlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2YnB5D7gwHFSwZ9z2M66q308tt-Y1r97CGjw9cGOhU',
        },
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.status_message)
      }

      const data = await res.json()
      setMoviesList(data.results)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

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
    error,
    loading,
  }
  return <MoviesContext.Provider value={ctx}>{children}</MoviesContext.Provider>
}
