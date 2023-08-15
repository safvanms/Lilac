import React from 'react'
import './Notification.css'
import Notifications from '../../notification.json'

export default function Notification() {
  return (
    <div className="notification_section">
      <div className="notification_container">
        <div className="notification">
          {Notifications.map(({ name, userImg, time, notification }) => (
            <div className="notification_raw">
              <img src={userImg} alt="user" />
              <div className="noti_content">
                <div className="noti_name">
                  <p style={{ fontWeight: 'bold' }}>{name}</p> &nbsp;
                  <p style={{ color: 'grey' }}>{notification}</p>
                </div>
                <div className="noti_time">
                  <p style={{ color: 'grey' }}>{time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
