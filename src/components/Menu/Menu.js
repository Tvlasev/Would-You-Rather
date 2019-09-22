import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return(
    <Fragment>
      <div class="menu">
        <Link to='/' class="menu-item">Home</Link>
        <Link to='/add-question' class="menu-item">Add new Question</Link>
        <Link to='/leader-board' class="menu-item">Leader Board</Link>
        <span class="menu-item welcome-message">Welcome, username!</span>
        <Link to='/login' class="menu-item logout">Logout</Link>
      </div>
    </Fragment>
  )
}

export default Menu