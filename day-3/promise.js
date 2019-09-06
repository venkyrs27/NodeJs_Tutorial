const { users, posts } = require("./data");

const getUser = username => {
          return new Promise((resolve, reject) => {
                    if (username.trim().length === 0) {
                              return reject(`User name should not be empty.`);
                    }

                    setTimeout(() => {
                              const user = users.find(u => u.name === username);
                              resolve(user);
                    }, 3000);

          });
};


const getPosts = userId => {
          return new Promise((resolve, reject) => {
                    if (isNaN(userId)) {
                              return reject('User id should be numeric.');
                    }

                    setTimeout(() => {
                              const postsForUser = posts.filter(p => p.userId === userId);
                              resolve(postsForUser);
                    }, 3000);
          });
}


console.log('begin');

//getUser('ram') will give you a promise 
//p.then(); && p.catch(); are two func in promise

// linear way of coding , not like callback hell where code grows right side.

getUser('ram').then(user => {
          console.log(user);
          return getPosts(user.id);
          //return getPosts("abc");
}).then(posts => {
          console.log("posts for user :", posts);
}).catch(err => console.log("getUser() = Error :" + err));

console.log('end');