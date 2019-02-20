var initialState = {x:100,y:50}

export default (state = initialState,action={})=>{
    switch (action.type) {
        case "UPDATE_PLAYER1":
        return {
            ...state,
            x:action.payload.x,
            y:action.payload.y
        }
        default:
        return state
    }
}

