import * as types from "../types/types"
import * as db from '../utils/_DATA'
import { handleInitialData } from "./shared"

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

export const saveQuestionAnswer = (obj) => {
  return dispatch => {
    return db._saveQuestionAnswer({
      ...obj
    })
      .then(() => dispatch(handleInitialData(obj.authedUser)))
      .catch(e => console.log(e))
  }
}

export function saveNewQuestion(obj) {
  return dispatch => {
    return db._saveQuestion({
      ...obj,
      author: obj.authUser
    })
      .then(data => dispatch(handleInitialData(data.author)))
      .catch(e => console.log(e))
  }
}