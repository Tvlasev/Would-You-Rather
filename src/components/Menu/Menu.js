import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = ({authUser, setAuthUser, handleShowMenu}) => {
  return(
    <Fragment>
      <div className="menu">
        <Link to='/' className="menu-item">Home</Link>
        <Link to='/add-question' className="menu-item">Add new Question</Link>
        <Link to='/leader-board' className="menu-item">Leader Board</Link>
        <span className="menu-item welcome-message">{`Welcome, ${authUser}!`}</span>
        <Link onClick={() => {handleShowMenu(); setAuthUser("")}}to='/login' className="menu-item logout">Logout</Link>
      </div>
    </Fragment>
  )
}

export default Menu