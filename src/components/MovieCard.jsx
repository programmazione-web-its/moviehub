export default function MovieCard({ title, year, poster }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{year}</p>
      <div className='poster'>
        <img src={poster} alt={`${title} poster`} />
      </div>
    </article>
  )
}
