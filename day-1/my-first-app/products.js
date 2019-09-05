const EventEmitter = require('events');

// const emitter = new EventEmitter();

class Product extends EventEmitter {
          create(product) {
                    //code to create a product
                    this.emit('created', product);
          }
          delete(id) {
                    //code to delete
                    this.emit('deleted', id);
          }
          // emit() {
          //           return emitter;
          // }
}

module.exports = Product;