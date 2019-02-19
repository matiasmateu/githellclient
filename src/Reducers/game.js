import {NEW_GAME,GAME_OVER} from '../Actions/game'

var initialState = {isRunning:true,player1:true,player2:false}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case NEW_GAME:
        return {
            ...state,
            isRunning:true
        }
        case GAME_OVER:
        return {
            ...state,
            isRunning:false
        }
        default:
        return state
    }
}

