export const keepLoggedIn = (data) => {
    return {
        type: 'KEEP_LOGGED_IN',
        payload: data
    }
}

export const resetToken = () => {
    return {
        type: 'RESET_TOKEN'
    }
}


export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export const nloading = () => {
    return {
        type: '!LOADING'
    }
}


