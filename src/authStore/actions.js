export const keepLoggedIn = data => ({
    type: 'KEEP_LOGGED_IN',
    payload: data
})

export const resetToken = () => ({
    type: 'RESET_TOKEN'
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const loading = () => ({
    type: 'LOADING'
})

export const nloading = () => ({
    type: '!LOADING'
})
