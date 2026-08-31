import { useEffect, useState } from 'react'

import movies from '../data/movies'

import Container from './components/Container'
import MovieList from './components/MovieList'

function App() {
  const [moviesList, setMoviesList] = useState(movies)

  console.log('movide', movies, moviesList)

  function handleFavourites(id) {
    setMoviesList((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, favorite: !el.favorite } : { ...el },
      ),
    )
  }

  return (
    <Container>
      <MovieList movies={moviesList} onClick={(e) => handleFavourites(e)} />
    </Container>
  )
}

export default App
