import * as types from '../types/types'

const initialState = {
  isPending: false,
  users: {},
  error: ''
}

export const getUsers = (state=initialState, action={}) => {
  switch(action.type){
    case types.REQUEST_USERS_PENDING:
      return {...state, isPending: true}
    case types.REQUEST_USERS_SUCCESS:
      return {...state, users: action.payload, isPending: false}
    case types.REQUEST_USERS_FAILED:
      return {...state, error: action.payload, isPending: false}
    default:
      return state
  }
}