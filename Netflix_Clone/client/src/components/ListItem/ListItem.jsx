import classes from './ListItem.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`movies/find/${item}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
          },
        })
        setMovie(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovie()
  }, [item, movie])

  return (
    <Link to="/watch" state={movie} className={classes.link}>
      <div
        className={classes.listItem}
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className={classes.logo} src={movie.img} alt="logo" />

        {isHovered && (
          <div>
            <iframe
              className={classes.amv}
              width="100%"
              height="100%"
              src={`${movie.video}?autoplay=1&loop=1`}
              title={movie.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div className={classes.movieInfo}>
              <div className={classes.info}>
                <span>{movie.duration}</span>
                <span className={classes.limit}>{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className={classes.desc}>{`${movie.desc.slice(
                0,
                200,
              )} ...`}</div>
              <div className={classes.genre}>{movie.genre}</div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default ListItem
