import * as types from '../types/types'

const initialState = {
  isPending: false,
  questions: {},
  error: ''
}

export const getQuestions = (state=initialState, action={}) => {
  switch(action.type){
    case types.REQUEST_QUESTIONS_PENDING:
      return {...state, isPending: true}
    case types.REQUEST_QUESTIONS_SUCCESS:
      return {...state, questions: action.payload, isPending: false}
    case types.REQUEST_QUESTIONS_FAILED:
      return {...state, error: action.payload, isPending: false}
    default:
      return state
  }
}