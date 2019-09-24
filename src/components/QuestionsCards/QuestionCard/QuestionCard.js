import React from 'react'
import './QuestionCard.css'

const QuestionCard = ({optionOne, optionTwo, author, avatar}) => {
  return(
    <div className='question-card'>
      <div className="user-question">
        <h2><img alt="avatar" src={avatar}/>{`${author} asks`}</h2>
        <p >{`Would you rather ${optionOne} or ${optionTwo}?`}</p>
      </div> 
    </div>
  )
}

export default QuestionCard