import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/Users'
import { getQuestions } from '../../actions/Questions'
import QuestionsCards from '../../components/QuestionsCards/QuestionsCards'
import { CircularProgress } from '@material-ui/core'

class Home extends Component {

  componentDidMount = () => {
    this.props.getUsers()
    this.props.getQuestions()
  }

  render(){
    const { answeredQuestions, users, unansweredQuestions } = this.props
    return(
      (Object.entries(users).length === 0 && users.constructor === Object)
      || answeredQuestions.length === 0
      || unansweredQuestions.length === 0
      ? (<div><CircularProgress /></div>)
      : (<Fragment>
          <QuestionsCards answeredQuestions={answeredQuestions} unansweredQuestions={unansweredQuestions} users={users}/>
        </Fragment>)
    )
  }
}

const mapStateToProps = state => {
  const allUsers = Object.values(state.getUsers.users)
  const allQuestions = Object.values(state.getQuestions.questions)

  const user = allUsers.find(user => user.name === state.setAuthUser.authUser)
  let answeredQuestions= []
  let unansweredQuestions = []

  if(user){
    const answeredQuestionsIDs = Object.keys(user.answers)

    answeredQuestions = allQuestions.filter(allQ => answeredQuestionsIDs.some(q => allQ.id === q))
      .sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
    unansweredQuestions = allQuestions.filter(q => !answeredQuestions.includes(q))
      .sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
  }

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
