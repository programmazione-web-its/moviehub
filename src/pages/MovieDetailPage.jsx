import { useParams } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch'

import Container from '../components/Container'
export default function MovieDetailPage() {
  const { movieId } = useParams()
  const { data, error, isLoading } = useFetch(`movie/${movieId}`)

  return (
    <Container>
      {error && <p>{error}</p>}
      {isLoading && <p>Please wait...</p>}
      {data && (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ width: '50%' }}>
            <h1>{data.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={`${data.title} poster`}
            />
          </div>
          <div style={{ width: '50%', padding: '3rem' }}>
            <p>{data.overview}</p>
          </div>
        </div>
      )}
    </Container>
  )
}
