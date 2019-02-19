export const USER_CONNECTED = "USER_CONNECTED"
export const USER_DISCONNECTED = "USER_DISCONNECTED"
export const GAME_STARTED = "GAME_STARTED"

const userConnected = user => ({
    type:USER_CONNECTED,
    user
})

const userDisconnected = user => ({
    type:USER_DISCONNECTED,
    user
})

const gameStarted = users => ({
    type: GAME_STARTED,
    users
})

export const userConnection = (user) => (dispatch,getState) => {
    dispatch(userConnected(user))
}


export const userDisconnection = (user) => (dispatch,getState) => {
    dispatch(userDisconnected(user))
}

export const gameStarting = (users) => (dispatch) => {
    dispatch(gameStarted(users))
}

