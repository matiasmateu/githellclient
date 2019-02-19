import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './Reducers/index'
import {socketIo} from './middleware'


const reducer = combineReducers (reducers)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

var W3CWebSocket = require('websocket').w3cwebsocket;

export const socket = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');

const enhancer = compose(
    applyMiddleware(ReduxThunk,socketIo(socket)),
    devTools
)
const store = createStore(reducer,enhancer)

export default store