import { Link } from 'react-router-dom'

export default function MovieCard({
  id,
  title,
  release_date,
  poster_path,
  genre,
  watched,
  favorite,
  onClick,
}) {
  return (
    <article className={favorite ? 'movie-card--favorite' : ''}>
      <button onClick={() => onClick(id)} className='fav-list'>
        {favorite ? '★' : '☆'}
      </button>
      <Link to={`/movies/${id}`}>
        <div>
          <h3>{title}</h3>
          <p>{new Date(release_date).getFullYear()}</p>
        </div>
        <div className='poster'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title} poster`}
          />
        </div>

        <div className='info'>
          {watched ? '✅ Visto' : '👀 Da vedere'}
          {genre && <span className='badge'>{genre}</span>}
        </div>
      </Link>
    </article>
  )
}
