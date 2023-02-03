import classes from './Featured.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
          },
        })

        setContent(res.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getRandomContent()
  }, [type])

  return (
    <div className={classes.featured}>
      {type && (
        <div className={classes.category}>
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img className={classes.headerBg} src={content.img} alt="header bg" />

      <div className={classes.info}>
        <img src={content.imgTitle} alt="movie logo" />
        <span>{content.title}</span>
        <p>{content.desc}</p>
        <span>{`Genre : ${content.genre}`}</span>
      </div>
    </div>
  )
}

export default Featured
