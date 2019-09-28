import React, { Component } from 'react'
import { Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core/'
import "./UnansweredQuestion.css"
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../../actions/Questions'
import { Link } from '@material-ui/core'

class UnansweredQuestion extends Component{

  state = {
    option: ""
  }

  handleAnswer = e => this.setState({...this.state, option: e.target.value})

  handleSaveAnswer = (obj) => {
    this.props.saveQuestionAnswer(obj)
      .then(data => console.log(data))
      .catch(e => console.log(e))
  }

  render(){
    const {optionOne, optionTwo, authedUser, questionID} = this.props
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
          <Link to='/login'>
            <Button 
              onClick={() => this.handleSaveAnswer({authedUser: authedUser, qid: questionID, answer: this.state.option})} 
              disabled={this.state.option === ''} 
              fullWidth 
              variant="contained" 
              color='primary'>Answer
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveQuestionAnswer: (obj) => dispatch(saveQuestionAnswer(obj))
  }
}

export default connect(null, mapDispatchToProps)(UnansweredQuestion)