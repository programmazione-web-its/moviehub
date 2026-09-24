import { useState, useEffect } from 'react'

export function useFetch(endpoint) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    if (!endpoint) return
    const getData = async () => {
      setIsLoading(true)
      setError(null) // resetta eventuale messaggio di errore
      try {
        const res = await fetch(`https://api.themoviedb.org/3/${endpoint}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDU1M2VmZWMwNzRjOGJjZGM2YzFlMDJmODZjZTgwNSIsIm5iZiI6MTc0ODY4NDg0OC4xNjIsInN1YiI6IjY4M2FkMDMwZGFhNzJmZmMzN2ZkYTlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2YnB5D7gwHFSwZ9z2M66q308tt-Y1r97CGjw9cGOhU',
          },
        })

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.status_message)
        }

        const json = await res.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [endpoint])

  return { data, error, isLoading }
}
