import { useEffect, useState } from 'react'
// import Movie from 'component/Movie'
import Movie from '../component/Movie'

function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const [movie, setMovie] = useState<[]>([])

  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    )

    const json = await response.json()

    setMovie(json.data.movies)
    setLoading(false)
  }
  //   console.log(movie)
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <h1>movies {movie.length}</h1>
      {loading ? <strong>loading..</strong> : <Movie movie={movie} />}
    </div>
  )
}

export default Home
