import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/Users'
import NewQuestion from '../../components/NewQuestion/NewQuestion'

class AddQuestion extends Component {

  componentDidMount = () => {
    this.props.getUsers()
  }

  render(){
    const { users, authUser} = this.props
    return(
      <NewQuestion users={users} authUser={authUser}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.getUsers.users,
    isPendingUsers: state.getUsers.isPending,
    errorUsers: state.getUsers.error,
    authUser: state.setAuthUser.authUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
