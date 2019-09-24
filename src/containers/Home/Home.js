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
  return {
    users: state.getUsers.users,
    isPendingUsers: state.getUsers.isPending,
    errorUsers: state.getUsers.error,
    questions: state.getQuestions.questions,
    isPendingQuestions: state.getQuestions.isPending,
    errorQuestions: state.getQuestions.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getQuestions: () => dispatch(getQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
