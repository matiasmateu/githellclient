import { USER_CONNECTED, USER_DISCONNECTED } from "./Actions/connections";
import {socket} from './Store'

export const socketIo = socketio => store => next => action => {
    if (action.type===USER_CONNECTED){
       
    }
    if(action.type===USER_DISCONNECTED){
        
    }
    
    next(action)
}