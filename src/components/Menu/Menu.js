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
        <div className="menu-item logout">
          <span style={{margin: '10px'}}>{`Welcome, ${authUser}!`}</span>
          <Link onClick={() => {handleShowMenu(); setAuthUser("")}} to='/login'>Logout</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Menu