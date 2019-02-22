var initialState = []

export default (state = initialState,action={})=>{
    switch (action.type) {
        case "UPDATE_FLAG":
        return action.payload
        default:
        return state
    }
}

