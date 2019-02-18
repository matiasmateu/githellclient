import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './Reducers/index'
import {socketIo} from './middleware'
import openSocket from 'socket.io-client'


const reducer = combineReducers (reducers)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

export const socket = openSocket('http://localhost:4000');


const enhancer = compose(
    applyMiddleware(ReduxThunk,socketIo(socket)),
    devTools
)
const store = createStore(reducer,enhancer)
export default store