import React from 'react'
import { Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core/'
import "./UnansweredQuestion.css"

const UnansweredQuestion = ({optionOne, optionTwo}) => {
  return(
    <div>
      <div className="question-body">
        <RadioGroup>
        <FormControlLabel
            value="option1"
            control={<Radio color="primary" />}
            label={optionTwo}
            labelPlacement="end"
          />
          <FormControlLabel
            value="option2"
            control={<Radio color="primary" />}
            label={optionOne}
            labelPlacement="end"
          />
        </RadioGroup>
        <div className="answer-button">
          <Button fullWidth variant="contained" color='primary'>Answer</Button>
        </div>
      </div>
    </div>
  )
}

export default UnansweredQuestion