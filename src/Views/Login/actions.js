import server from '../../api';
export const login = (email, password) => dispatch => {
  dispatch({ type: 'LOGIN_LOADING' })
  server.post('/login', { email, password })
    .then(res => {
      dispatch({
        type: 'LOGIN',
        payload: {
          token: res.data.token,
          user: res.data.user
        }
      })
      dispatch({ type: '!LOGIN_LOADING' })
      dispatch({ type: '!TOKEN_ERROR' })
      dispatch({ type: '!LOGIN_ERROR' })
    })
    .catch(err => {
      if (err.response) {
        dispatch({ type: 'LOGIN_ERROR', payload: err.response.data.error })
      }
      else {
        dispatch({ type: 'LOGIN_ERROR', payload: 'Something went wrong' })
      }
      dispatch({ type: '!LOGIN_LOADING' })

    })
}
