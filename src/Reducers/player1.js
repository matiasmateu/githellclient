
var initialState = {x:100,y:50}


export default (state = initialState,action={})=>{
    switch (action.type) {
        case "UPDATE_PLAYER1":
        return action.payload
        case "CONCILIATION_PLAYER1":
        return action.payload
        default:
        return state
    }
}

