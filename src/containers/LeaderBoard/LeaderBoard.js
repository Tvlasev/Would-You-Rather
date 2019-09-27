import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/Users'
import UserCard from "../../components/UserCard/UserCard"
import "./LeaderBoard.css"

class LeaderBoard extends Component {

  componentDidMount = () => {
    this.props.getUsers()
  }

  render(){
    const { users } = this.props
    const allUsers = Object.values(users)

    return(
      <div className="users-container">
        {
          allUsers.sort((a, b) => (Object.keys(a.answers).length + a.questions.length) < (Object.keys(b.answers).length + b.questions.length) ? 1 : -1)
            .map((user,i) => (
              <UserCard 
                key={user.id}
                rank={i+1}
                user={user} 
                userAnswers={Object.keys(user.answers).length}
                userQuestions={user.questions.length}
                userScore={Object.keys(user.answers).length + user.questions.length}
                users={allUsers}
              />
            ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.getUsers.users,
    isPendingUsers: state.getUsers.isPending,
    errorUsers: state.getUsers.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);