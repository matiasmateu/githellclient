import {USER_CONNECTED,USER_DISCONNECTED,CONNECTIONS_UPDATE} from '../Actions/connections'


var initialState = {player1:false,player2:false,playerAssigned:null}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case USER_CONNECTED:
        return {
            ...state,
            [action.payload]:true,
            playerAssigned:action.payload
        }
        case USER_DISCONNECTED:
        return {
            ...state,
            [action.payload.id]:false
        }
        case CONNECTIONS_UPDATE:
        return {
            ...state,
            [action.payload]:true
        }
        default:
        return state
    }
}

