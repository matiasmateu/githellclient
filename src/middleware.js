import { USER_CONNECTED, USER_DISCONNECTED } from "./Actions/connections";


export const socketIo = socketio => store => next => action => {
    if (action.type===USER_CONNECTED){
        alert("UserConnected")
    }
    if(action.type===USER_DISCONNECTED){
        alert("UserDisconnected")
    }
    
    next(action)
}