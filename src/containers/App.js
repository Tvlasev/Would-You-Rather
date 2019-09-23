import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthUser } from '../actions/setAuthUser'
import './App.css'
import Menu from '../components/Menu/Menu'
import Login from './Login/Login'
import Page404 from '../components/page404'
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
    const { authUser } = this.props
    const { showMenu } =  this.state
    console.log(showMenu)
    return (
      <Fragment>
        {
          showMenu ? (<Menu authUser={authUser} handleShowMenu={this.handleShowMenu} setAuthUser={this.props.setAuthUser}/>) : null
        }
          <div className="page-content">
          <Switch>
            <Route exact path="/" render={props => < Home/>} />
            <Route exact path="/login" render={props => <Login handleShowMenu={this.handleShowMenu}/>} />
            <Route exact path="/add-question" render={props => < AddQuestion/>} />
            <Route exact path="/leader-board" render={props => < LeaderBoard/>} />
            <Route exact path="/questions" render={props => < Questions/>} />
            <Route component={Page404} />
          </Switch>
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.setAuthUser.authUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAuthUser: (user) => dispatch(setAuthUser(user)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
