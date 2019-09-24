import React from 'react'
import './QuestionCard.css'
import { Button } from '@material-ui/core'

const QuestionCard = ({optionOne, optionTwo, author, avatar}) => {
  return(
    <div className='question-card'>
      <div className="user-question">
        <h2><img alt="avatar" src={avatar}/>{`${author} asks`}</h2>
        <p >{`Would you rather ${optionOne} or ${optionTwo}?`}</p>
      </div>
      <div className='poll-button'>
        <Button fullWidth variant="contained" color="primary" >
          View Poll
        </Button>
      </div>
    </div>
  )
}

export default QuestionCard