import { useRef, useEffect } from 'react'

export default function SearchBar({ inputValue, onChange }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (!inputRef?.current) return
    inputRef.current.focus()
  }, [])

  return (
    <div className='search-bar-wrapper'>
      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Cerca...'
      />
    </div>
  )
}
