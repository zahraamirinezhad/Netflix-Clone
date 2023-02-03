import classes from './NavBar.module.scss'
import NetflixIcon from '../../images/netflix-logo-png-2562.png'
import { Search, Notifications, KeyboardArrowDown } from '@mui/icons-material'
import ProfileImg from '../../images/profile.jpg'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { dispatch } = useContext(AuthContext)
  const [isShowMenu, setIsShowMenu] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const showMenu = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <div className={`${classes.navbar} ${isScrolled ? classes.scrolled : ''}`}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img className={classes.icon} src={NetflixIcon} alt="logo" />
          <Link to="/" className={classes.link}>
            <span className={classes.selectable}>Home Page</span>
          </Link>
          <Link to="/series" className={classes.link}>
            <span className={classes.selectable}>Series</span>
          </Link>
          <Link to="/movies" className={classes.link}>
            <span className={classes.selectable}>Movies</span>
          </Link>
          <span className={classes.selectable}>New and Popular</span>
          <span className={classes.selectable}>My List</span>
        </div>

        <div className={classes.phone_size_left}>
          <img className={classes.icon} src={NetflixIcon} alt="logo" />
          <button className={classes.menu} onClick={showMenu}>
            Menu
          </button>
          <ul
            className={`${classes.menuList} ${isShowMenu ? classes.show : ''}`}
          >
            <Link to="/" className={classes.link}>
              <li className={classes.selectable}>Home Page</li>
            </Link>
            <Link to="/series" className={classes.link}>
              <li className={classes.selectable}>Series</li>
            </Link>
            <Link to="/movies" className={classes.link}>
              <li className={classes.selectable}>Movies</li>
            </Link>
            <li className={classes.selectable}>New and Popular</li>
            <li className={classes.selectable}>My List</li>
          </ul>
        </div>

        <div className={classes.right}>
          <Search />
          <span>KID</span>
          <Notifications className={classes.selectable} />
          <img className={classes.avatar} src={ProfileImg} alt="avatar" />
          <div className={classes.profileOption}>
            <KeyboardArrowDown className={classes.optionsIcon} />
            <ul className={classes.options}>
              <li>Settings</li>
              <li onClick={() => dispatch(logout())}>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
