import axios from 'axios'
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from './MovieActions'

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart())
  try {
    const res = await axios.get('/movies', {
      headers: {
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
      },
    })
    dispatch(getMoviesSuccess(res.data))
  } catch (err) {
    dispatch(getMoviesFailure())
  }
}

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart())
  try {
    const res = await axios.post('/movies', movie, {
      headers: {
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
      },
    })
    dispatch(createMovieSuccess(res.data))
  } catch (err) {
    dispatch(createMovieFailure())
  }
}

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart())
  try {
    await axios.delete('/movies/' + id, {
      headers: {
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
      },
    })
    dispatch(deleteMovieSuccess(id))
  } catch (err) {
    dispatch(deleteMovieFailure())
  }
}
