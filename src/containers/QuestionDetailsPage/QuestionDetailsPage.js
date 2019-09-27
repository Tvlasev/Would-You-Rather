import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/Users'
import { getQuestions } from '../../actions/Questions'
import QuestionDetails from '../../components/QuestionDetails/QuestionDetails'

class QuestionDetailsPage extends Component{

  componentDidMount = () => {
    this.props.getUsers()
    this.props.getQuestions()
  }

  render(){
    const { users, questions, authUser, history} =  this.props
    return(
      <div>
        <QuestionDetails users={users} history={history} questions={questions} authUser={authUser}/>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    users: state.getUsers.users,
    isPendingUsers: state.getUsers.isPending,
    errorUsers: state.getUsers.error,
    questions: state.getQuestions.questions,
    isPendingQuestions: state.getQuestions.isPending,
    errorQuestions: state.getQuestions.error,
    authUser: state.setAuthUser.authUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getQuestions: () => dispatch(getQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsPage);

