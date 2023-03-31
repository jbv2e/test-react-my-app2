import { Link } from 'react-router-dom'

interface MovieParam {
  movie: {
    id: string
    medium_cover_image?: string
    title: string
    summary?: string
    generes?: string[]
    tes?: string
  }[]
}

function Movie({ movie }: MovieParam) {
  return (
    <div>
      {movie.map((m: any) => (
        <div key={m.id}>
          <img src={m.medium_cover_image}></img>
          <h2>
            <Link to={`/details/${m.id}`}>{m.title}</Link>
          </h2>
          <p>{m.summary}</p>
          <ul>
            {m.genres.map((g: string) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default Movie
