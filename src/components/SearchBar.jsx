import { useRef, useEffect, useContext } from 'react'

import MoviesContext from '../store/movies-context'

// Da sistemare e gestire con useFetch
export default function SearchBar() {
  const inputRef = useRef(null)
  const movieCtx = useContext(MoviesContext)

  const { searchTerm, setSearchTerm } = movieCtx
  useEffect(() => {
    if (!inputRef?.current) return
    inputRef.current.focus()
  }, [])

  function searchMovies(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={searchMovies} className='search-bar-wrapper'>
      <input
        ref={inputRef}
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Cerca...'
      />
    </form>
  )
}
