import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL } from "../constant/authConstant"

const INITIAL_STATE = {
  login: {}
}

export const LoginReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case LOGIN_PENDING:
      return state

    case LOGIN_SUCCESS:
      return action.payload

    case LOGIN_FAIL:
      return {
        error: action.payload,
      }

    default:
      return state
  }
}