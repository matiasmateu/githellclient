import { socket} from "../Store"

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

export const userConnection = (user) => (dispatch,getState) => {
    
    dispatch(userConnected(user))
    socket.send(JSON.stringify({type:"Login",user:user}))
    // socket.on('Login', (user) =>{})
}

export const userDisconnection = (user) => (dispatch,getState) => {
    dispatch(userDisconnected(user))
    socket.send(JSON.stringify({type:"Logout",user:user}))
}