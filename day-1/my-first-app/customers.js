"use strict";

var cust = {
          name: 'venkatesh',
          email: 'venkatesh123@gmail.com',
          phone: '100',
          display: function () {
                    console.log('Custome details : ', this.name, this.email, this.phone);
          }
};

function greet() {
          console.log("----Greetings----");
}

// function expression , anonymous func
var greetTwo = function () {
          console.log("----Greetings Two----");
}

//module.exports.customer = cust;
//module.exports.greet = greet;
module.exports = {
          customer: cust,
          greet: greet
}