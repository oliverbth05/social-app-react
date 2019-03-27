import server from '../../api';

export const createPost = (post, ownProps) => dispatch => {
  dispatch({ type: 'CREATE_POST_LOADING' })
  server.post('/posts', post)
    .then(res => {
      dispatch({ type: 'HOME_NEEDS_UPDATE' })
      ownProps.history.push(`/show/${res.data._id}`)
      dispatch({ type: '!CREATE_POST_LOADING' })
    })
    .catch(err => {
      if (err.response) {
        if (err.response.status === 401) {
          dispatch({ type: 'TOKEN_ERROR' });
          dispatch({ type: 'LOGOUT' })
        }
      }
    })
}
