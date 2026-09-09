import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import Container from '../components/Container'
export default function MovieDetailPage() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (!movieId) return

    const getMovie = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDU1M2VmZWMwNzRjOGJjZGM2YzFlMDJmODZjZTgwNSIsIm5iZiI6MTc0ODY4NDg0OC4xNjIsInN1YiI6IjY4M2FkMDMwZGFhNzJmZmMzN2ZkYTlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2YnB5D7gwHFSwZ9z2M66q308tt-Y1r97CGjw9cGOhU',
            },
          },
        )

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.status_message)
        }

        const data = await res.json()
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    getMovie()
  }, [movieId])

  return (
    <Container>
      {error && <p>{error}</p>}
      {isLoading && <p>Please wait...</p>}
      {movie && (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ width: '50%' }}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
          <div style={{ width: '50%', padding: '3rem' }}>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </Container>
  )
}
