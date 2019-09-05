
const getUser = (id, name, cb) => {
          if (isNaN(id)) {
                    return cb(`User with name ${name} must be numeric`);
          }
          setTimeout(() => {
                    cb(undefined, {
                              id: id,
                              name: name
                    });
          }, 3000);
};

console.log('begin');

const showUser = (err, user) => {
          if (err) {
                    return console.log('Error: ', err);
          }
          console.log('user : ', user);
}

// showUser -> call back function
getUser(1, 'tom', showUser);

getUser('a', 'jerry', showUser);

console.log('end');