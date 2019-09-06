const jwt = require('jsonwebtoken');
const _ = require('lodash');


const login = async (req, res) => {

          const payload = _.pick(user, ['_id', 'name', 'isAdmin']);
          const token = jwt.sign(payload, 'ecom-private-key');
          res.send({ token, user: payload });
}