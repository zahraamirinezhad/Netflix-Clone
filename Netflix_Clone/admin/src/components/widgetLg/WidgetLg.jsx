import './widgetLg.css'
import avatar from '../../images/profile.jpg'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function WidgetLg() {
  const [latestUsers, setLatestUsers] = useState([])

  useEffect(() => {
    const getLatestUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2VkYmE4NTY5ZmJiZTE2M2UxZGRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU1MDA1NCwiZXhwIjoxNjc0OTgyMDU0fQ.wx8fgyj93riKyHYGxp9Oyx5502Lv19UoniN7Y30O9_A',
          },
        })

        setLatestUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getLatestUsers()
  }, [latestUsers])

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Status</th>
          </tr>

          {latestUsers.map((user) => (
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src={user.profilePic ? user.profilePic : avatar}
                  alt="avatar"
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{user.username}</span>
              </td>
              <td className="widgetLgDate">{user.createdAt}</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
