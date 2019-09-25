import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/Users'
import { getQuestions } from '../../actions/Questions'
import QuestionsCards from '../../components/QuestionsCards/QuestionsCards'

class Home extends Component {

  componentDidMount = () => {
    this.props.getUsers()
    this.props.getQuestions()
  }

  render(){
    const { questions, users } = this.props
    return(
      <Fragment>
        <QuestionsCards questions={questions} users={users}/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  const allUsers = Object.values(state.getUsers.users)
  const allQuestions = Object.values(state.getQuestions.questions)

  const user = allUsers.find(user => user.name === state.setAuthUser.authUser)
  const answeredQuestionsIDs = Object.keys(user.answers)

  const answeredQuestions = allQuestions.filter(allQ => answeredQuestionsIDs.some(q => allQ.id === q))
    .sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)
  const unansweredQuestions = allQuestions.filter(q => !answeredQuestions.includes(q))
    .sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)

  return {
    users: state.getUsers.users,
    isPendingUsers: state.getUsers.isPending,
    errorUsers: state.getUsers.error,
    questions: state.getQuestions.questions,
    isPendingQuestions: state.getQuestions.isPending,
    errorQuestions: state.getQuestions.error,
    authUser: state.setAuthUser.authUser,
    answeredQuestions: answeredQuestions,
    unansweredQuestions: unansweredQuestions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getQuestions: () => dispatch(getQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
