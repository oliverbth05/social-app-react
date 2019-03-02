import server from '../api';

export const searchPosts = query => {
    return dispatch => {
        dispatch({type: 'SEARCH_LOADING'})
        server.get(`/posts/search?sort=${query.sort}&searchTerm=${query.searchTerm}&page=1`)
        .then(res => {
            dispatch({
                type: 'SEARCH_POSTS',
                payload: {
                    posts: res.data,
                    sort: query.sort,
                    searchTerm: query.searchTerm
                }
            })
            dispatch({type: '!SEARCH_LOADING'})
        })
        .catch(err => {
            console.log(err)
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