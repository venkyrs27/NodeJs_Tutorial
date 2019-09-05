const http = require('http');

const users = [
          { id: 1, name: 'boyka', isAdmin: true },
          { id: 1, name: 'django', isAdmin: false }
];

const products = [
          { id: 1, name: 'iphone', price: 1000 },
          { id: 1, name: 'samsung', price: 5000 },
          { id: 1, name: 'mi', price: 500 },
];

const server = http.createServer((req, res) => {
          // console.log('req: ', req);
          // console.log('res: ', res);
          console.log(`req arrived with url: ${req.url}`);
          if (req.url === '/') {
                    res.end('<h1>Welcome to My app</h1>');
          }
          if (req.url === '/api/products') {
                    // res.statusCode = 200;

                    if (req.method === 'GET') {
                              res.end(JSON.stringify(products));
                    }
                    if (req.method === 'POST') {
                              res.end("Products created");
                    }
          }
          if (req.url === '/api/users') {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(users));
          }

});


const port = process.env.PORT || 3000;

// server.listen(port, () =>
//           console.log('server started and listening on port ' + port)
// );

server.listen(port, () =>
          console.log(`server started and listening on port ${port}`)
);