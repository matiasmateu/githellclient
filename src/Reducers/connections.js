import {USER_CONNECTED,USER_DISCONNECTED} from '../Actions/connections'


var initialState = {player1:false,player2:false}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case USER_CONNECTED:
        return {
            ...state,
            [action.payload]:true
        }
        case USER_DISCONNECTED:
        return {
            ...state,
            [action.payload]:false
        }
        default:
        return state
    }
}

