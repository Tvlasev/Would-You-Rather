import React from 'react'

const HeaderQuestion = ({avatar, author, optionOne, optionTwo}) => {
  return(
    <div className="user-question">
      <h2><img alt="avatar" src={avatar}/>{`${author} asks`}</h2>
      <p >{`Would you rather ${optionOne} or ${optionTwo}?`}</p>
    </div>
  )
}

export default HeaderQuestion