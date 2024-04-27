const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn off the water pump!');

  setTimeout(()=>{
    console.log("its a gentle remainder");
  },3000);
});
myEmitter.emit('waterfull'); ///kuch nahi bas event fir karna sikha