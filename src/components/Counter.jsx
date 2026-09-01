import { useContext } from 'react'

import MoviesContext from '../store/movies-context'

export default function Counter() {
  const movieCtx = useContext(MoviesContext)
  const { favoriteMovies } = movieCtx

  return <div className='counter'>⭐ {favoriteMovies.length} preferiti</div>
}
