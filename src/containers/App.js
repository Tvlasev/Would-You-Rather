import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthUser } from '../actions/setAuthUser'
import './App.css'
import Menu from '../components/Menu/Menu'
import Login from './Login/Login'
import Page404 from '../components/page404'
import PrivateRoute from '../components/PrivateRoute'
import Home from './Home/Home'
import AddQuestion from './AddQuestion/AddQuestion'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import Questions from './Questions/Questions'


class App extends Component {

  state = {
    showMenu: false
  }

  handleShowMenu = () => {
    !this.state.showMenu ? this.setState({...this.state, showMenu: true}) : this.setState({...this.state, showMenu: false})
  }

  render() {
    const { authUser, isAuthenticated } = this.props
    const { showMenu } =  this.state
    return (
      <Fragment>
        {
          showMenu ? (<Menu authUser={authUser} handleShowMenu={this.handleShowMenu} setAuthUser={this.props.setAuthUser}/>) : null
        }
          <div className="page-content">
          <Switch>
            <PrivateRoute exact path="/" component={Home} isAuthenticated={isAuthenticated} />
            <Route exact path="/login" render={props => <Login handleShowMenu={this.handleShowMenu}/>} />
            <PrivateRoute exact path="/add-question" component={AddQuestion} isAuthenticated={isAuthenticated} />
            <PrivateRoute exact path="/leader-board" component={LeaderBoard} isAuthenticated={isAuthenticated} />
            <PrivateRoute exact path="/questions" component={Questions} isAuthenticated={isAuthenticated}/>
            <PrivateRoute component={Page404} />
          </Switch>
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.setAuthUser.authUser,
    isAuthenticated: state.setAuthUser.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAuthUser: (user) => dispatch(setAuthUser(user)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
