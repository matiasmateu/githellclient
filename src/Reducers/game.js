import {GAME_STARTED} from '../Actions/connections'

var initialState = {isRunning:false, player1:false,player2:false}

export default (state = initialState, action={})=>{
    switch (action.type) {
        case GAME_STARTED:
        return {
            ...state,
            isRunning:true
        }
        default:
        return state
    }
}
