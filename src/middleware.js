import {socket} from './Store'
import {STS_USER_CONNECTED,STS_USER_DISCONNECTED,STS_NEW_GAME,STS_UPDATE_PLAYER1} from './Actions/STSactions'

export const customMiddleware = store => next => action => {
    if (action.type===STS_USER_CONNECTED){
        socket.send(JSON.stringify({ type: "Login", data: action.data }))
    }
    if (action.type===STS_USER_DISCONNECTED){
        socket.send(JSON.stringify({ type: "Logout", data: action.data }))
    }
    if (action.type===STS_NEW_GAME){
        socket.send(JSON.stringify({ type: "NEW_GAME_REQUEST", data: action.data }))
    }
    if (action.type===STS_UPDATE_PLAYER1){
        socket.send(JSON.stringify({ type: "UPDATE_PLAYER1", data: action.data }))
    }

    next(action)
}