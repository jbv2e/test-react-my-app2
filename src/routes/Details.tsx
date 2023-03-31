import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface MovieParam {
  movie: {
    id: string | ''
    large_cover_image?: string | ''
    medium_cover_image?: string
    title: string | ''
    summary?: string
    generes?: string[]
    tes?: string
  }
}

function Details({}) {
  // console.log(useParams().id)

  const { id } = useParams()

  const [info, setInfo] = useState<MovieParam>({
    movie: {
      id: '',
      large_cover_image: '',
      title: '',
    },
  })

  useEffect(() => {
    getDetail()
    // console.log(info)
  }, [])

  async function getDetail() {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)

    const json = await response.json()

    console.log(json)
    setInfo(json.data)
  }

  /*
  async function getDetail() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${useParams().id}`
    )

    const json = await response.json()

    console.log(json)
    // setInfo(json)
  }
  */
  /*
  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json()

      console.log(json)
      // setDetail(json.data.movie);
      // setLoading(false);
    }
    // getDetail()
  }, [id])
*/
  function onClikc() {}

  return (
    <div>
      <h1>details</h1>
      <img src={info.movie.large_cover_image}></img>
      <h3>{info ? info.movie.title : null}</h3>
      <button>back</button>
    </div>
  )
}

export default Details
