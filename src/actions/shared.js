import { getQuestions } from '../actions/Questions'
import { getUsers } from '../actions/Users'
import { setAuthUser } from '../actions/setAuthUser'
import { getInitialData } from '../helpers/helpers'

export function handleInitialData(userId){
  console.log(userId)
  return dispatch => {
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(setAuthUser(userId ? userId : null))
        dispatch(getQuestions(questions))
        dispatch(getUsers(users))
      })
      .catch(e => console.log(e))
  }
}