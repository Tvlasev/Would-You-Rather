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
  const user = allUsers.find(user => user.name === authUser)
  const avatar = author.avatarURL
  const answeredQuestionsIDs = Object.keys(user.answers)
  const isQuestionAnswered = answeredQuestionsIDs.includes(question.id)
  let answerOption = ''

  if(isQuestionAnswered){
    answerOption = user.answers[question.id]
  }

  return(
    <div className="question-card">
      <HeaderQuestion avatar={avatar} author={question.author} optionOne={question.optionOne.text} optionTwo={question.optionTwo.text}/>
      {
        isQuestionAnswered 
          ? (<AnsweredQuestion answerOption={answerOption} optionOne={question.optionOne.text} optionTwo={question.optionTwo.text}/>)
          : (<UnansweredQuestion optionOne={question.optionOne.text} optionTwo={question.optionTwo.text}/>)
      }
    </div>
  )
}

export default QuestionDetails