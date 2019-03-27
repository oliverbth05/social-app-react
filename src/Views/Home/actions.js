import server from '../../api';

//This action always resets the page counter and the reached-end variable
export const fetchPosts = (sort, searchTerm) => dispatch => {
  dispatch({ type: 'POSTS_LOADING' })
  dispatch({ type: '!REACHED_END' })
  server.get(`/posts?sort=${sort}&page=1&searchTerm=`)
    .then(res => {
      dispatch({ type: '!POSTS_LOADING' })
      dispatch({ type: '!POSTS_ERROR' })
      dispatch({
        type: 'FETCH_POSTS',
        payload: res.data
      })
      dispatch({ type: '!POSTS_LOADING' })
      if (res.data.length < 25) { //If the server returns less than a full page, we can assume that it is the last one
        dispatch({ type: 'REACHED_END' })
      }
    })
    .catch(err => {
      if (err.response) {
        if (err.response.status = 401) {
          dispatch({ type: 'TOKEN_ERROR' });
          dispatch({ type: 'LOGOUT' })
        }
      }
      dispatch({ type: 'POSTS_ERROR' })
      dispatch({ type: '!POSTS_LOADING' })
    })
}

export const fetchMorePosts = (sort, page, searchTerm) => dispatch => {
  dispatch({ type: 'MORE_POSTS_LOADING' })
  server.get(`/posts?sort=${sort}&page=${page}`)
    .then(res => {
      if (res.data.length < 25) {
        dispatch({ type: 'REACHED_END' })
      }

      dispatch({
        type: 'FETCH_MORE_POSTS',
        payload: res.data
      })

      dispatch({ type: '!MORE_POSTS_LOADING' })
    })
    .catch(err => {
      if (err.response) {
        if (err.response.status = 401) {
          dispatch({ type: 'TOKEN_ERROR' });
          dispatch({ type: 'LOGOUT' })
        }
      }
      else {
        dispatch({ type: 'POSTS_ERROR' })
      }
      dispatch({ type: '!MORE_POSTS_LOADING' })
    })
}

export const changeLayout = (style) => ({
  type: 'CHANGE_LAYOUT',
  payload: style
})

export const changeSort = (sort) => ({
  type: 'CHANGE_SORT',
  payload: sort
})

export const homeUpdated = () => ({
  type: '!HOME_NEEDS_UPDATE'
})

export const homeNeedsUpdate = () => ({
  type: 'HOME_NEEDS_UPDATE'
})
