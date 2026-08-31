export default function MovieCard({ title, year, poster, genre, watched }) {
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
      <div className='poster'>
        <img
          src={new URL(`../assets/movies/${poster}`, import.meta.url).href}
          alt={`${title} poster`}
        />
      </div>
      <hr />
      <div className='info'>
        {watched ? '✅ Visto' : '👀 Da vedere'}
        {genre && <span className='badge'>{genre}</span>}
      </div>
    </article>
  )
}
