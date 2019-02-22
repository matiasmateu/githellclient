import {USER_CONNECTED,USER_DISCONNECTED} from '../Actions/connections'


var initialState = {player1:false,player2:false,playerAssigned:null}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case USER_CONNECTED:
        return {
            ...state,
            [action.payload.id]:true,
            playerAssigned:action.payload.id
        }
        case USER_DISCONNECTED:
        return {
            ...state,
            [action.payload.id]:false
        }
        default:
        return state
    }
}

