const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
          name: {
                    type: String,
                    required: true,
                    minlength: 3
          },
          email: {
                    type: String,
                    required: true
          },
          password: {
                    type: String,
                    required: true
          },
          isAdmin: {
                    type: Boolean,
                    default: false
          }
});

const User = mongoose.model('user', userSchema);

module.exports = User;