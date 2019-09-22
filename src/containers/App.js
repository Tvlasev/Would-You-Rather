import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Login from '../components/Login/Login'
import Page404 from '../components/page404'
import Home from './Home/Home'
import AddQuestion from './AddQuestion/AddQuestion'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import Questions from './Questions/Questions'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <Switch>
          <Route exact path="/" render={props => < Home/>} />
          <Route exact path="/login" render={props => < Login/>} />
          <Route exact path="/add-question" render={props => < AddQuestion/>} />
          <Route exact path="/leader-board" render={props => < LeaderBoard/>} />
          <Route exact path="/questions" render={props => < Questions/>} />
          <Route component={Page404} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
