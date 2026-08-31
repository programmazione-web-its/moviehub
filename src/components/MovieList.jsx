import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  if (!movies) return <p>Nessun film disponibile</p>

  return (
    <div className='grid'>
      {movies?.map((el) => (
        <MovieCard key={el.id} {...el} />
      ))}
    </div>
  )
}
