import {USER_CONNECTED} from '../Actions/connections'
import {USER_DISCONNECTED} from '../Actions/connections'

var initialState = {player1:false,player2:false}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case USER_CONNECTED:
        console.log("Inside user connected reducer")
        return state
        case USER_DISCONNECTED:
        console.log("Inside user disconnected reducer")
        return state
        default:
        return state
    }
}