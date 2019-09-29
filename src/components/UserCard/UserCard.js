import React from 'react'
import './UserCard.css'

const UserCard = ({user, userAnswers, userQuestions, userScore, rank}) => {
  return(
    <div className="user-card-container">
      <img className="user-img" alt="user-img" src={user.avatarURL} />
      <div style={{padding: '5px'}}>
        <h2 style={{margin: '5px'}}>{user.id}</h2>
        <p>Rank: {rank}</p>
        <p>Answered Questions: {userAnswers}</p>
        <p>Asked Questions: {userQuestions}</p>
        <hr />
        <p>Score: {userScore}</p>
      </div>
    </div>
  )
}

export default UserCard