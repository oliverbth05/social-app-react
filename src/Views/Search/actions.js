import server from '../../api';

export const searchPosts = query => {
  return dispatch => {
    dispatch({ type: 'SEARCH_LOADING' })
    server.get(`/posts/?sort=${query.sort}&searchTerm=${query.searchTerm}&page=1`)
      .then(res => {
        console.log(res.data, 'RESPOSe')
        dispatch({
          type: 'SEARCH_POSTS',
          payload: {
            posts: res.data,
            sort: query.sort,
            searchTerm: query.searchTerm
          }
        })
        dispatch({ type: '!SEARCH_LOADING' })
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch({ type: 'TOKEN_ERROR' });
          dispatch({ type: 'LOGOUT' })
        }
      })
  }
}

export const searchUpdated = () => {
  return {
    type: '!SEARCH_NEEDS_UPDATE'
  }
}

export const searchNeedsUpdate = () => {
  return {
    type: 'SEARCH_NEEDS_UPDATE'
  }
}