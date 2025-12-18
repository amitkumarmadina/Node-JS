// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this, this === myEmitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     _events: [Object: null prototype] { event: [Function (anonymous)] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined,
//   //     Symbol(shapeMode): false,
//   //     Symbol(kCapture): false
//   //   } true
// });
// myEmitter.emit('event', 'a', 'b');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('called', ()=>{
    console.log("event called");
    setTimeout(() => {
        console.log("2 second passed are you sure you dont want to pick");
    }, 5000);
})
console.log("before event called");

myEmitter.emit('called');
