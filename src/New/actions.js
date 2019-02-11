import server from '../api';

export const createPost = (post) => {
  return dispatch => {
      server.post('/posts', post)
      .then()
      .catch()
  }
}