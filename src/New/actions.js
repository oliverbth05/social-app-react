import server from '../api';

export const createPost = (post, ownProps) => {
  return dispatch => {
      dispatch({type: 'NEW_LOADING'})
      server.post('/posts', post)
      .then(res => {
        ownProps.history.push(`/show/${res.data._id}`)
        dispatch({type: '!NEW_LOADING'})
      })
      .catch(err => {
        
      })
  }
}