import {UPDATE_GAME} from '../Actions/game'

var initialState = {isRunning:false,gravity:0.2,velocity:1}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case UPDATE_GAME:
        return {
            ...state,
            isRunning:action.payload.isRunning,
            gravity:action.payload.gravity,
            velocity:action.payload.velocity
        }
        default:
        return state
    }
}

