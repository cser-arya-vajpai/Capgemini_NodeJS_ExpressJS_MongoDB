const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('login',()=>{
    console.log("login successful");
})

emitter.on('logout',()=>{
    console.log("logout successful");
})


emitter.emit('login')
emitter.emit('logout')