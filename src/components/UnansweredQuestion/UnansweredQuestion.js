import React, { Component } from 'react'
import { Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core/'
import "./UnansweredQuestion.css"

class UnansweredQuestion extends Component{

  state = {
    option: ""
  }

  handleAnswer = e => this.setState({...this.state, option: e.target.value})

  render(){
    const {optionOne, optionTwo} = this.props
    
    return(
      <div>
        <div className="question-body">
          <RadioGroup>
          <FormControlLabel
              value="option1"
              control={<Radio color="primary" />}
              label={optionTwo}
              labelPlacement="end"
              onChange={(e) => this.handleAnswer(e)}
            />
            <FormControlLabel
              value="option2"
              control={<Radio color="primary" />}
              label={optionOne}
              labelPlacement="end"
              onChange={(e) => this.handleAnswer(e)}
            />
          </RadioGroup>
        </div>
        <div className="answer-button">
          <Button disabled={this.state.option === ''} fullWidth variant="contained" color='primary'>Answer</Button>
        </div>
      </div>
    )
  }
}

export default UnansweredQuestion