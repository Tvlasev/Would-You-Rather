import React from 'react'
import './QuestionCard.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import HeaderQuestion from '../../HeaderQuestion/HeaderQuestion'

const QuestionCard = ({optionOne, optionTwo, author, avatar, questionID}) => {
  return(
    <div className='questions-card'>
      <HeaderQuestion avatar={avatar} author={author} optionOne={optionOne} optionTwo={optionTwo}/>
      <div className='poll-button'>
        <Link to={`/question/${questionID}`}><Button fullWidth variant="contained" color="primary" >
          View Poll
        </Button></Link>
      </div>
    </div>
  )
}

export default QuestionCard