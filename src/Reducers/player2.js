var initialState = {x:300,y:50}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case "UPDATE_PLAYER2":
        return {
            ...state,
            x:action.payload.x,
            y:action.payload.y
        }
        case "CONCILIATION_PLAYER2":
        return action.payload
        default:
        return state
    }
}

