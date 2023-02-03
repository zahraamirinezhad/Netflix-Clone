import classes from './Watch.module.scss'
import { ArrowBack } from '@mui/icons-material'
import { useLocation, Link } from 'react-router-dom'

const Watch = () => {
  const location = useLocation()
  const movie = location.state
  console.log(location)
  return (
    <div className={classes.watch}>
      <Link to="/">
        <div className={classes.back} data-hover="Home">
          <ArrowBack />
        </div>
      </Link>

      <iframe
        width="100%"
        height="100%"
        src={`${movie.video}?autoplay=1`}
        title={movie.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Watch
