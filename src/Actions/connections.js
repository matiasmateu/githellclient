export const USER_CONNECTED = "USER_CONNECTED"
export const USER_DISCONNECTED = "USER_DISCONNECTED"


const userConnected = data => ({
    type:USER_CONNECTED,
    payload : data
})

const userDisconnected = data => ({
    type:USER_DISCONNECTED,
    payload : data
})

export const userConnection = (data) => (dispatch) => {
    dispatch(userConnected(data))
}


export const userDisconnection = (data) => (dispatch) => {
    dispatch(userDisconnected(data))
}

