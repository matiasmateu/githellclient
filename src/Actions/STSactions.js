export const STS_USER_CONNECTED = 'STS_USER_CONNECTED'
export const STS_USER_DISCONNECTED = 'STS_USER_DISCONNECTED'
export const STS_NEW_GAME = 'STS_NEW_GAME_REQUEST'
export const STS_UPDATE_PLAYER1 = 'STS_UPDATE_PLAYER1'

const sendUserConnected = data => ({
    type:STS_USER_CONNECTED,
    data
})

export const userIsNowConnected = (data) => (dispatch) => {
    dispatch(sendUserConnected(data))
}

const sendUserDisconnected = data => ({
    type:STS_USER_DISCONNECTED,
    data:{isRunning:true}
})

export const userIsNowDisconnected = (data) => (dispatch) => {
    dispatch(sendUserDisconnected(data))
}

const newGame = (data) => ({
    type:STS_NEW_GAME,
    data
})

export const sendNewGameRequest = (data) => (dispatch) => {
    dispatch(newGame(data))
}

const player1Updated = (data) => ({
    type:STS_UPDATE_PLAYER1,
    data
})

export const updatePlayer1 = (data) => (dispatch) => {
    dispatch(player1Updated(data))
}