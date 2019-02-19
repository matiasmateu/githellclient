

export default class SocketIO {

    socket = null

    onerror = function () {
        console.log('Connection Error');
    };

    onopen = function () {
        console.log('WebSocket Client Connected!!!');
    
    };

    onclose = function () {
        console.log('echo-protocol Client Closed');
    };

    onmessage = function (e) {
        console.log("Message Received")
    };
}