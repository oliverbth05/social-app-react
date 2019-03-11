const initialState = {
  login_error: null,
  register_error: null,
  posts_error: false,
  post_error: false,
  comment_error: false,
  token_error: false
}

const error = (state = initialState, action) => {
  switch (action.type) {

    case 'TOKEN_ERROR' :
      return {
        ...state,
        token_errror: true
      }

    case '!TOKEN_ERROR' :
      return {
        ...state,
        token_error: false
      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        login_error: action.payload
      }

    case '!LOGIN_ERROR':
      return {
        ...state,
        login_error: null
      }

    case 'REGISTER_ERROR':
      return {
        ...state,
        register_error: action.payload
      }

    case '!REGISTER_ERROR':
      return {
        ...state,
        register_error: null
      }

    case 'POSTS_ERROR':
      return {
        ...state,
        posts_error: true
      }

    case '!POSTS_ERROR':
      return {
        ...state,
        posts_error: false
      }

    case 'POST_ERROR':
      return {
        ...state,
        post_error: action.payload
      }

    case '!POST_ERROR':
      return {
        ...state,
        post_error: null
      }

    default :
      return state


  }
}

export default error;