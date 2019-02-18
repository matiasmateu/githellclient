import io from 'socket.io-client'
import {baseURL} from './constants'


export default class SocketIO{
    socket = null

    connect(){
        this.socket = io.openSocket('http://localhost:3000');
    }

    disconnect(){
        //this.socket.disconnect()
    }
}