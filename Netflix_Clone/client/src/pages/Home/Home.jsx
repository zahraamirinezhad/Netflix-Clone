import { NavBar, Featured, List } from '../../components'
import classes from './Home.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
            },
          },
        )

        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomList()
  }, [type, genre])

  return (
    <div className={classes.home}>
      <NavBar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list.title} list={list} />
      ))}
    </div>
  )
}

export default Home
