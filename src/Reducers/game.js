import {NEW_GAME,GAME_OVER} from '../Actions/game'

var initialState = {isRunning:false,gravity:0.2,velocity:1}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case NEW_GAME:
        return {
            ...state,
            isRunning:true,
            gravity:action.payload.gravity,
            velocity:action.payload.velocity
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

