import server from '../api'

export const fetchPosts = (sort, searchTerm) => { //Always fetches the first page of the results, resetting the page counter
  return dispatch => {
      dispatch({type: 'POSTS_LOADING'})
      dispatch({type: '!REACHED_END'}) //If the reachedEnd variable was acheived on another sort type, this ensures a fresh reset
      server.get(`/posts?sort=${sort}&page=1&searchTerm=${searchTerm}`)
      .then(res => {
        dispatch({type: '!POSTS_LOADING'})
        dispatch({
          type: 'FETCH_POSTS',
          payload: res.data
        })
        dispatch({type: '!POSTS_LOADING'})
        if (res.data.length < 25) { //If the server returns less than a full page, we can assume that it is the last one
          dispatch({type: 'REACHED_END'})
        }
      })
      .catch(err => {
          console.log(err)
      })
  }
}

export const fetchMorePosts = (sort, page, searchTerm) => {
  return dispatch => {
    dispatch({type: 'MORE_POSTS_LOADING'})
    server.get(`/posts?sort=${sort}&page=${page}&searchTerm=${searchTerm}`) //Requires the page variable
    .then(res => {
      
      if (res.data.length < 25) {
        dispatch({type: 'REACHED_END' })
      }
      
      dispatch({
        type: 'FETCH_MORE_POSTS',
        payload: res.data
      })
      dispatch({type: '!MORE_POSTS_LOADING'})
    })
  }
}
 
export const changeLayout = (style) => {
  return {
    type: 'CHANGE_LAYOUT',
    payload: style 
  }
}

export const changeSort = (sort) => {
  return {
    type: 'CHANGE_SORT',
    payload: sort
  }
}

export const homeUpdated = () => {
  return {
    type: '!HOME_NEEDS_UPDATE'
  }
}

export const homeNeedsUpdate = () => {
  return {
    type: 'HOME_NEEDS_UPDATE'
  }
}