import React from 'react'
import './AnsweredQuestion.css'
import { Radio } from '@material-ui/core/'

const AnsweredQuestion = ({optionOne, optionTwo, answerOption}) => {
  console.log(answerOption)
  return(
    <div className="answered-container">
      <div className="answer">
        <Radio disabled={answerOption === 'optionTwo'} checked={answerOption === 'optionOne'} />{optionOne}
      </div>
      <div className="answer">
        <Radio disabled={answerOption === 'optionOne'} checked={answerOption === 'optionTwo'}/>{optionTwo}
      </div> 
    </div>
  )
}

export default AnsweredQuestion