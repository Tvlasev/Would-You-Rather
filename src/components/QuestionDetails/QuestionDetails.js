import React from 'react'
import HeaderQuestion from '../HeaderQuestion/HeaderQuestion'
import AnsweredQuestion from '../AnsweredQuestion/AnsweredQuestion'
import UnansweredQuestion from '../UnansweredQuestion/UnansweredQuestion'
import './QuestionDetails.css'

const QuestionDetails = ({users, questions, authUser, history}) => {
  const allUsers = Object.values(users)
  const allQuestions = Object.values(questions)
  const path = history.location.pathname
  const question = allQuestions.find(q => path.includes(q.id))
  const author = allUsers.find(user => user.id === question.author)
  const user = allUsers.find(user => user.id === authUser)
  const avatar = author.avatarURL
  const answeredQuestionsIDs = Object.keys(user.answers)
  const isQuestionAnswered = answeredQuestionsIDs.includes(question.id)
  const votesOptionOne = question.optionOne.votes.length
  const votesOptionTwo = question.optionTwo.votes.length
  const votes = votesOptionOne + votesOptionTwo
  let answerOption = ''

  if(isQuestionAnswered){
    answerOption = user.answers[question.id]
  }

  return(
    <div className="question-card" 
      style={isQuestionAnswered ? {width: '500px', height: '400px'} : {width: '500px', height: '300px'} }>
      <HeaderQuestion avatar={avatar} author={question.author} optionOne={question.optionOne.text} optionTwo={question.optionTwo.text}/>
      {
        isQuestionAnswered 
          ? (<AnsweredQuestion 
              answerOption={answerOption} 
              optionOne={question.optionOne.text} 
              optionTwo={question.optionTwo.text}
              votes={votes}
              votesOptionOne={votesOptionOne}
              votesOptionTwo={votesOptionTwo}
            />)
          : (<UnansweredQuestion 
              optionOne={question.optionOne.text} 
              optionTwo={question.optionTwo.text}
              users={users}
              questions={questions}
              questionID={question.id}
              authedUser={user.id}
            />)
      }
    </div>
  )
}

export default QuestionDetails