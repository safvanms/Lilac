import React from 'react'
import './Header.css'
import {AiOutlineSearch} from 'react-icons/ai'

export default function Header() {
  return (
    <nav>
      <h1>
        learn <span style={{ color: 'blue' }}>Online</span>
      </h1>
      <div className="search__section">
        <input type="text" placeholder="Search..." />
        <AiOutlineSearch size={15} color='grey'/>
      </div>
      <div className="account__section">
        <img src="https://picsum.photos/200" alt="user" />
        <h3>User Name</h3>
      </div>
    </nav>
  )
}
