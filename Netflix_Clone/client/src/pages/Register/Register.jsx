import classes from './Register.module.scss'
import NetflixIcon from '../../images/netflix-logo-png-2562.png'
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = () => {
    setEmail(emailRef.current.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setPassword(passwordRef.current.value)
    setUsername(usernameRef.current.value)
    try {
      await axios.post('auth/register', { email, username, password })
      navigate('/login')
    } catch (err) {}
  }

  return (
    <div className={classes.register}>
      <div className={classes.top}>
        <img className={classes.logo} src={NetflixIcon} alt="Logo" />
        <Link to="login" className={classes.loginBTN}>
          Sign In
        </Link>
      </div>
      <div className={classes.container}>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email ? (
          <div className={classes.email}>
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button className={classes.registerBTN} onClick={handleSubmit}>
              Get Started
            </button>
          </div>
        ) : (
          <form className={`${classes.email} ${classes.emailNextStep}`}>
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className={classes.registerBTN} onClick={handleLogin}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register
