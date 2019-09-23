import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/Users'
import { setAuthUser } from '../../actions/setAuthUser'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component{

  componentDidMount = () => {
    this.props.getUsers()
  }

  isUserSelected = () => this.props.authUser === "" ? false : true
  

  render(){
    const { users, authUser } = this.props
    const userNames = Object.values(users)
    
    return(
      <Fragment>
        <div className='login-box'>
          <h1>Welcome! Please Sign in to your account</h1>
          <select 
            onChange={(e) => this.props.setAuthUser(e.target.value)} 
            defaultValue={authUser !== '' ? authUser : ''} 
            className='users-dropdown'
          >
            <option value='' disabled>Select a user</option>
            {userNames.map(user => {
              return (
                <option key={user.id} value={user.name}>{user.name}</option>
              )
            })}
          </select>
          <div className='login-button'>
            {this.isUserSelected()
              ? (<Link to='/'><button>Login</button></Link>)
              : (<div><button>Login</button><p>Please select a user to log-in</p></div>)
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.getUsers.users,
    isPending: state.getUsers.isPending,
    error: state.getUsers.error,
    authUser: state.setAuthUser.authUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    setAuthUser: (user) => dispatch(setAuthUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);