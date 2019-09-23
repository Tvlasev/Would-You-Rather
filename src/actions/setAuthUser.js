import { SET_AUTH_USER } from '../types/types'

export const setAuthUser = (user) => {
  return ({
    type: SET_AUTH_USER,
    payload: user
  })
}