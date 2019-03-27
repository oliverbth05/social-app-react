import server from '../../api';

export const register = (data) => dispatch => {
  dispatch({ type: 'REGISTER_LOADING' })
  server.post('/register', data)
    .then(res => {
      dispatch({
        type: 'LOGIN',
        payload: {
          token: res.data.token,
          user: res.data.user
        }
      })
      dispatch({ type: '!REGISTER_ERROR' })
      dispatch({ type: '!REGISTER_LOADING' })
    })
    .catch(err => {
      if (err.response) {
        dispatch({ type: 'REGISTER_ERROR', payload: err.response.data.error })
      }
      else {
        dispatch({ type: 'REGISTER_ERROR', payload: 'Something went wrong' })
      }
      dispatch({ type: '!REGISTER_LOADING' })
    })
}
