import {socket} from './Store'
import {STS_USER_CONNECTED,STS_USER_DISCONNECTED} from './Actions/STSactions'

export const customMiddleware = store => next => action => {
    if (action.type===STS_USER_CONNECTED){
        socket.send(JSON.stringify({ type: "Login", data: action.data }))
    }
    if (action.type===STS_USER_DISCONNECTED){
        socket.send(JSON.stringify({ type: "Logout", data: action.data }))
    }
    next(action)
}