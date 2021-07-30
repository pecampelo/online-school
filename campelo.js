const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
const mymodule = require('./module.js')
const { readFile, readFileSync } = require('fs').promises;







// Sync needs to finish all the function's work before the rest of code can run
// const txt = readFileSync('./hello.txt', 'utf8');  
// const txt = () => {
//   for (i = 0; i > 99; i++) {
//     readFileSync('./hello.txt', 'utf8');  
//   }
// }

// readFile('./hello.txt', 'utf8', (err, text) => {
//     console.log(text)
// })

// eventEmitter.on('lunch', () => {
//     console.log('Event emitted');
// })


process.title = 'MyNewServer';
  var args = process.argv,
      port = args[2] | 7070,
      server = require('./server');

server.listen(port, function() {
    console.log(`Server is currently running on port ${port}`);
    // eventEmitter.emit('lunch') 
});