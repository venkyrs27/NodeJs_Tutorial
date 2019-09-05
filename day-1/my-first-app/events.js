const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('created', function (event) {
          console.log('Created Event ', event);
});

emitter.on('deleted', function () {
          console.log('Deleted Event Handled.');
});

emitter.emit('created', 'Samsung');
emitter.emit('created', { name: 'iphone', id: 101 });
emitter.emit('deleted');
