import { SET_AUTH_USER } from '../types/types'

const initialState = {
  authUser: '',
  isAuthenticated: false
}

export const setAuthUser = (state=initialState, action={}) => {
  switch(action.type){
    case SET_AUTH_USER:
      return ({...state, authUser: action.payload, isAuthenticated: true})
    default:
      return state
  }
}