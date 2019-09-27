import React from 'react'
import './AnsweredQuestion.css'
import { Radio } from '@material-ui/core/'
import ProgressBar from "../ProgressBar/ProgressBar"
import { Label } from 'semantic-ui-react'

const AnsweredQuestion = ({optionOne, optionTwo, answerOption, votesOptionOne, votesOptionTwo, votes}) => {
  console.log(answerOption)
  return(
    <div className="answered-container">
      <div className="answer">
      <div className="label">
          {
            answerOption === "optionOne"
              ? (<Label color='red' ribbon attached="top right">
              Your Vote
            </Label>)
              : null
          }
        </div>
        <Radio disabled={answerOption === 'optionTwo'} checked={answerOption === 'optionOne'} />{optionOne}
        <ProgressBar votesOptionOne={votesOptionOne} votes={votes}/>
        <p className="votes-info">{`${votesOptionOne} from ${votes} votes`}</p>
      </div>
      <div className="answer">
        <div className="label">
          {
            answerOption === "optionTwo"
              ? (<Label color='red' ribbon attached="top right">
              Your Vote
            </Label>)
              : null
          }
        </div>
        <Radio disabled={answerOption === 'optionOne'} checked={answerOption === 'optionTwo'}/>{optionTwo}
        <ProgressBar votesOptionTwo={votesOptionTwo} votes={votes}/>
        <p className="votes-info">{`${votesOptionTwo} from ${votes} votes`}</p>
      </div> 
    </div>
  )
}

export default AnsweredQuestion