import server from '../../api'

export const fetchPosts = () => {
  return dispatch => {
      dispatch({type: 'POSTS_LOADING'})
      server.get('/posts')
      .then(res => {
          dispatch({
              type: 'FETCH_POSTS',
              payload: res.data
          })
          dispatch({type: '!POSTS_LOADING'})
     
      })
      .catch(err => {
          console.log(err)
      })
  }
}