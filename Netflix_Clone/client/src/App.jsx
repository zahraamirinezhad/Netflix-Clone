import classes from './App.module.scss'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Watch from './pages/Watch/Watch'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './authContext/AuthContext'
import { useContext } from 'react'

const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className={classes.home}>
      <Routes>
        <Route
          path="/"
          element={user ? <Home type="series" /> : <Register />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </div>
  )
}

export default App
