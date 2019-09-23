import * as types from "../types/types"
import * as db from '../utils/_DATA'

export const getQuestions = () => dispatch => {
  dispatch({type: types.REQUEST_QUESTIONS_PENDING})
  db._getQuestions()
    .then(data => dispatch({
      type: types.REQUEST_QUESTIONS_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: types.REQUEST_QUESTIONS_FAILED,
      payload: error
    }))
}