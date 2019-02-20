export const STS_USER_CONNECTED = 'STS_USER_CONNECTED'
export const STS_USER_DISCONNECTED = 'STS_USER_DISCONNECTED'

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