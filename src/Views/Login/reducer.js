const initialState = {
  loading: false,
  error: null
}

const user = (state = initialState, action) => {
  switch (action.type) {

    case 'LOGIN_LOADING':
      return {
        ...state,
        loading: true
      }

    case '!LOGIN_LOADING':
      return {
        ...state,
        loading: false
      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.payload
      }

    case '!LOGIN_ERROR':
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}

export default user;