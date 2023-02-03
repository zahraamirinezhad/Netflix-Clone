import classes from './Login.module.scss'
import NetflixIcon from '../../images/netflix-logo-png-2562.png'
import { useState, useContext } from 'react'
import { AuthContext } from '../../authContext/AuthContext'
import { login } from '../../authContext/apiCalls'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    login({ email, password }, dispatch)
  }

  return (
    <div className={classes.login}>
      <div className={classes.top}>
        <img className={classes.logo} src={NetflixIcon} alt="Logo" />
      </div>
      <div className={classes.container}>
        <form className={classes.loginForm}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={classes.loginBTN} onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix ? <b style={{ color: 'red' }}>Sing Up Now.</b>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
