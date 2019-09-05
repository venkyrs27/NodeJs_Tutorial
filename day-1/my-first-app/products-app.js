const Product = require('./products');

const p = new Product();
// p.emit().on('created', function (e) {
//           console.log('Created Event ', e);
// });
p.on('created', function (e) {
          console.log('Created Event ', e);
});

p.on('deleted', function (e) {
          console.log('Deleted Event ', e);
});


p.create({ id: 1, name: 'samsung' });
p.create({ id: 2, name: 'apple' });
p.delete(1);

