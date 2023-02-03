import axios from 'axios'
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from './ListActions'

export const getLists = async (dispatch) => {
  dispatch(getListsStart())
  try {
    const res = await axios.get('/lists', {
      headers: {
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
      },
    })
    dispatch(getListsSuccess(res.data))
  } catch (err) {
    dispatch(getListsFailure())
  }
}

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart())
  try {
    const res = await axios.post('/lists', list, {
      headers: {
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
      },
    })
    dispatch(createListSuccess(res.data))
  } catch (err) {
    dispatch(createListFailure())
  }
}

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart())
  try {
    await axios.delete('/lists/' + id, {
      headers: {
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
      },
    })
    dispatch(deleteListSuccess(id))
  } catch (err) {
    dispatch(deleteListFailure())
  }
}
