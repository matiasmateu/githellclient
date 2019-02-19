import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './Reducers/index'




const reducer = combineReducers(reducers)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

var W3CWebSocket = require('websocket').w3cwebsocket;

const enhancer = compose(
    applyMiddleware(ReduxThunk),
    devTools
)
const store = createStore(reducer, enhancer)

export const socket = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');

// When a connection is made
socket.onopen = function () {
    console.log('Opened connection ');
};

// A connection could not be made
socket.onerror = function (event) {
    console.log(event)
};

// When data is received
socket.onmessage = function (event) {
    store.dispatch(JSON.parse(event.data))
};

// A connection was closed
socket.onclose = function (code, reason) {
    console.log(code, reason);
}

// Close the connection when the window is closed
window.addEventListener('beforeunload', function () {
    socket.close();
});




export default store