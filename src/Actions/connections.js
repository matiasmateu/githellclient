export const USER_CONNECTED = "USER_CONNECTED"
export const USER_DISCONNECTED = "USER_DISCONNECTED"

const userConnected = user => ({
    type:USER_CONNECTED,
    user
})

const userDisconnected = user => ({
    type:USER_DISCONNECTED,
    user
})

export const userConnection = (user) => (dispatch) => {
    dispatch(userConnected(user))

}

export const userDisconnection = (user) => (dispatch) => {
    dispatch(userDisconnected(user))
}