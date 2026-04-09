const EventEmitter = require('events');

// create an emitter instance
const emitter = new EventEmitter();

// attach an event listener
emitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

// emit the event
emitter.emit('greet', "vipin");