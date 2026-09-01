import { useState } from 'react'

import movies from '../data/movies'

import Container from './components/Container'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import Counter from './components/Counter'

function App() {
  const [moviesList, setMoviesList] = useState(movies)
  const [searchTerm, setSearchTerm] = useState('')

  function handleFavourites(id) {
    setMoviesList((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, favorite: !el.favorite } : { ...el },
      ),
    )
  }

  const filteredMovies = moviesList.filter((el) =>
    el.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const favoriteFilteredMovies = filteredMovies.filter((el) => el.favorite)

  return (
    <Container>
      <div className='flex'>
        <SearchBar inputValue={searchTerm} onChange={setSearchTerm} />
        <Counter count={favoriteFilteredMovies.length} />
      </div>
      <MovieList movies={filteredMovies} onClick={(e) => handleFavourites(e)} />
    </Container>
  )
}

export default App
