import React from 'react'
import './sidebar.css'
import { BiBook, BiHomeAlt2 } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdCreate } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const sidebarOptions = [
  {
    name: 'Home',
    path: '/',
    icon: <BiHomeAlt2 />,
  },
  {
    name: 'Courses',
    path: '/courses',
    icon: <BiBook />,
  },
  {
    name: 'Create Course',
    path: '/create-course',
    icon: <MdCreate />,
  },
  {
    name: 'Notifications',
    path: '/notification',
    icon: <IoMdNotificationsOutline />,
  },
]

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        {sidebarOptions.map((item) => (
          <NavLink
            style={{ textDecoration: 'none' }}
            key={item.path}
            to={item.path}
            activeClassName="active"
          >
            <div className="option">
              <div style={{ fontSize: '20px', marginTop: '5px' }}>
                {item.icon}
              </div>
              <div className="option__name">{item.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
