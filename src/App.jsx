import movies from '../data/movies'
import Container from './components/Container'
import MovieList from './components/MovieList'

function App() {
  return (
    <Container>
      <MovieList movies={movies} />
    </Container>
  )
}

export default App
