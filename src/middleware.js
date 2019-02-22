import {socket} from './Store'
import {STS_USER_CONNECTED,STS_USER_DISCONNECTED,STS_NEW_GAME,STS_UPDATE_PLAYER,STS_GAME_OVER,STS_UPDATE_PLATFORMS} from './Actions/STSactions'

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
    if (action.type===STS_UPDATE_PLAYER){
        socket.send(JSON.stringify({ type: "UPDATE_PLAYER", data: action.data }))
    }
    if(action.type===STS_GAME_OVER){
        socket.send(JSON.stringify({ type: "GAME_OVER_REQUEST"}))
    }
    if(action.type===STS_UPDATE_PLATFORMS){
        socket.send(JSON.stringify({type:"NEW_PLATFORMS"}))
    }
    next(action)
}