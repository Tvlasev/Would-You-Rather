import React from 'react'
import QuestionCard from './QuestionCard/QuestionCard'
import "./QuestionsCards.css"

const QuestionsCards = ({questions, users}) => {
  const allQuestions = Object.values(questions)
  const allUsers = Object.values(users)
  
  return(
    <div>
      {allQuestions.map(q => {
        const author = allUsers.find(user => user.id === q.author) 
        return (<QuestionCard 
          key={q.id} 
          optionOne={q.optionOne.text} 
          optionTwo={q.optionTwo.text} 
          author={author.name} 
          avatar={author.avatarURL}
          />)
      })}
    </div>
  )
}

export default QuestionsCards