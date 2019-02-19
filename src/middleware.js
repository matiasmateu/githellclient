import { USER_CONNECTED, USER_DISCONNECTED } from "./Actions/connections";
import {socket} from './Store'

export const socketIo = socketio => store => next => action => {
    if (action.type===USER_CONNECTED){
        socket.send(JSON.stringify({type:'Login',user:action.user}))
    }
    if(action.type===USER_DISCONNECTED){
        socket.send(JSON.stringify({type:'Logout',user:action.user}))
    }
    
    next(action)
}