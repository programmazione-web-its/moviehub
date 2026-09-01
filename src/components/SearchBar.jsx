import { useRef, useEffect, useContext } from 'react'

import MoviesContext from '../store/movies-context'

export default function SearchBar() {
  const inputRef = useRef(null)
  const movieCtx = useContext(MoviesContext)

  const { searchTerm, setSearchTerm } = movieCtx
  useEffect(() => {
    if (!inputRef?.current) return
    inputRef.current.focus()
  }, [])

  return (
    <div className='search-bar-wrapper'>
      <input
        ref={inputRef}
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Cerca...'
      />
    </div>
  )
}
