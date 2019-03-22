const initialState = {
    loading: false,
    error: null,
    unread: null,
    read: null,
    firstLoaded: false
}

const notifications = (state = initialState, action) => {
    switch(action.type) {
        
        
        case 'FETCH_NOTIFICATIONS' :
            
            var read = action.payload.filter(item => {
                return item.isRead
            })
            
            var unread = action.payload.filter(item => {
                return !item.isRead
            })
            
            return {
                ...state,
                read,
                unread,
                firstLoaded: true
            }
            
        case 'UPDATE_NOTIFICATION' :
            
            var updatedItem;
            
            var unreadUpdated = state.unread.map(item => {
                if (item._id === action.payload) {
                    updatedItem = item
                    updatedItem.isRead = true
                }
                
                else {
                    return item
                }
            })
            
            var readUpdated = [...state.read, updatedItem]
            
            return {
                ...state,
                unread: unreadUpdated,
                read: readUpdated
            }
            
            
            
        case 'NOTIFICATIONS_LOADING' :
            return {
                ...state,
                loading: true
            }
        
        case '!NOTIFICATIONS_LOADING' :
            return {
                ...state,
                loading: false
            }
        
        
        default :
        return state
    }
}

export default notifications;