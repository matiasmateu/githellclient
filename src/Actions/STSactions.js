export const STS_USER_CONNECTED = 'STS_USER_CONNECTED'
export const STS_USER_DISCONNECTED = 'STS_USER_DISCONNECTED'
export const STS_NEW_GAME = 'STS_NEW_GAME_REQUEST'
export const STS_UPDATE_PLAYER = 'STS_UPDATE_PLAYER'
export const STS_GAME_OVER = "STS_GAME_OVER"
export const STS_UPDATE_PLATFORMS = "STS_UPDATE_PLATFORMS"

const sendUserConnected = data => ({
    type:STS_USER_CONNECTED,
    data
})

export const userIsNowConnected = (data) => (dispatch) => {
    dispatch(sendUserConnected(data))
}

const sendUserDisconnected = data => ({
    type:STS_USER_DISCONNECTED,
    data
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

const playerUpdated = (data) => ({
    type:STS_UPDATE_PLAYER,
    data
})

export const updatePlayer = (data) => (dispatch,getState) => {
    if(getState().game.isRunning){
        dispatch(playerUpdated(data))
    }  
}

const gameOver = () => ({
    type:STS_GAME_OVER
    
})

export const sendGameOver = () => (dispatch) => {
    dispatch(gameOver())
}

const updatePlatforms = (data) => ({
    type:STS_UPDATE_PLATFORMS
})

export const sendPlatforms = (data) => (dispatch) => {
    dispatch(updatePlatforms(data))
}