const initialState = {
  login_error: false,
  register_error: false,
  posts_error: false,
  post_error: false,
  comment_error: false
}

const error = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        login_error: true
      }

    case '!LOGIN_ERROR':
      return {
        ...state,
        login_error: false
      }

    case 'REGISTER_ERROR':
      return {
        ...state,
        register_error: true
      }

    case '!REGISTER_ERROR':
      return {
        ...state,
        register_error: false
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
        post_error: true
      }

    case '!POST_ERROR':
      return {
        ...state,
        post_error: false
      }

    default :
      return state


  }
}

export default error;