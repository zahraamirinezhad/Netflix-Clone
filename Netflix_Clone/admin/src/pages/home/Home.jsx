import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export default function Home() {
  const MONTHS = useMemo(
    () => [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    [],
  )

  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getUserStat = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
          },
        })

        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ]),
        )

        console.log(userStats)
      } catch (err) {
        console.log(err)
      }
    }
    getUserStat()
  }, [MONTHS, userStats])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
