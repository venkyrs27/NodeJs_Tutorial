// use built-in modeule
const os = require('os');
const fs = require('fs');
const path = require('path');


console.log("platform ", os.platform());
console.log("freemem ", os.freemem());

console.log("dirname ", __dirname);
console.log("filename ", __filename);

const filePath = path.join(__dirname, 'index.js');
console.log("filepath :" + filePath);

// sync version
//console.log(fs.readFileSync(filePath, 'utf-8'));

// async version
fs.readFile(filePath + "aaa", 'utf-8', function (err, result) {
          if (err) {
                    console.log('Error:', err);
                    return;
          }
          console.log('result: ', result);
});







