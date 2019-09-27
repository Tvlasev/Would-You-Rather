import React from 'react'
import './AnsweredQuestion.css'
import { Radio } from '@material-ui/core/'
import ProgressBar from "../ProgressBar/ProgressBar"

const AnsweredQuestion = ({optionOne, optionTwo, answerOption, votesOptionOne, votesOptionTwo, votes}) => {
  return(
    <div className="answered-container">
      <div className="answer">
        {/* {
          answerOption === "optionOne"
            ? ()
            : null
        } */}
        <Radio disabled={answerOption === 'optionTwo'} checked={answerOption === 'optionOne'} />{optionOne}
        <ProgressBar votesOptionOne={votesOptionOne} votes={votes}/>
        <p className="votes-info">{`${votesOptionOne} from ${votes} votes`}</p>
      </div>
      <div className="answer">
        {/* {
          answerOption === "optionTwo"
            ? ()
            : null
        } */}
        <Radio disabled={answerOption === 'optionOne'} checked={answerOption === 'optionTwo'}/>{optionTwo}
        <ProgressBar votesOptionTwo={votesOptionTwo} votes={votes}/>
        <p className="votes-info">{`${votesOptionTwo} from ${votes} votes`}</p>
      </div> 
    </div>
  )
}

export default AnsweredQuestion