const initialState = {
  loading: false,
  error: null
}

const user = (state = initialState, action) => {
  switch (action.type) {

    case 'REGISTER_ERROR':
      return {
        ...state,
        error: action.payload
      }

    case '!REGISTER_ERROR':
      return {
        ...state,
        error: null
      }

    case 'REGISTER_LOADING':
      return {
        ...state,
        loading: true
      }

    case '!REGISTER_LOADING':
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default user;