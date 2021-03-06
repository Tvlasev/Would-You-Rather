import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { getUsers} from './reducers/Users'
import { setAuthUser } from './reducers/setAuthUser'
import { getQuestions } from './reducers/Questions'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const rootReducer = combineReducers({ getUsers, setAuthUser, getQuestions })
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
