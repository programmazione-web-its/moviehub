import { useContext } from 'react'

import MoviesContext from '../store/movies-context'

import Container from '../components/Container'
import Counter from '../components/Counter'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'

export default function HomePage() {
  const moviesCtx = useContext(MoviesContext)

  const { handleFavourites, filteredMovies } = moviesCtx

  return (
    <Container>
      <div className='flex'>
        <SearchBar />
        <Counter />
      </div>
      <MovieList movies={filteredMovies} onClick={(e) => handleFavourites(e)} />
    </Container>
  )
}
