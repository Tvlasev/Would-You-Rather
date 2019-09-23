import * as types from "../types/types"
import * as db from '../utils/_DATA'

export const getUsers = () => dispatch => {
  dispatch({type: types.REQUEST_USERS_PENDING})
  db._getUsers()
    .then(data => dispatch({
      type: types.REQUEST_USERS_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: types.REQUEST_USERS_FAILED,
      payload: error
    }))
}