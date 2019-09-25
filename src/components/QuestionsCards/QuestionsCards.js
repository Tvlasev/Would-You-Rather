import React, { Component } from 'react'
import QuestionCard from './QuestionCard/QuestionCard'
import "./QuestionsCards.css"
import { Button } from '@material-ui/core'

class QuestionsCards extends Component{

  state = {
    isUnansweredShown: true
  }

  handleAnsweredQuestions = () => {
    this.setState({...this.state, isUnansweredShown: false})
  }

  handleUnansweredQuestions = () => {
    this.setState({...this.state, isUnansweredShown: true})
  }

  render(){
    const { isUnansweredShown } = this.state
    const { users, answeredQuestions, unansweredQuestions } = this.props
    const allUsers = Object.values(users)

  return(
    <div>
      <div>
        <Button
          disabled={isUnansweredShown}
          onClick={() => this.handleUnansweredQuestions()}
          variant="contained"
          color="primary">UnAnswered Questions
        </Button>
        <Button
          disabled={!isUnansweredShown}
          onClick={() => this.handleAnsweredQuestions()}
          variant="contained" 
          color="primary">Answered Questions
        </Button>
        {isUnansweredShown ? (<h2>Your Unanswered Questions</h2>) : (<h2>Your Answered Questions</h2>)}
        {
          isUnansweredShown 
            ? unansweredQuestions.map(q => {
                const author = allUsers.find(user => user.id === q.author) 
                return (<QuestionCard 
                  key={q.id} 
                  optionOne={q.optionOne.text} 
                  optionTwo={q.optionTwo.text} 
                  author={author.name} 
                  avatar={author.avatarURL}
                  />)
              })
            : answeredQuestions.map(q => {
                const author = allUsers.find(user => user.id === q.author) 
                return (<QuestionCard 
                  key={q.id} 
                  optionOne={q.optionOne.text} 
                  optionTwo={q.optionTwo.text} 
                  author={author.name} 
                  avatar={author.avatarURL}
                  />)
              })
        }
      </div>
    </div>
  )
  }
}

export default QuestionsCards