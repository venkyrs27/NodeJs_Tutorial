const express = require('express');

const router = express.Router();

const users = [
          { id: 121, name: 'boyka', isAdmin: true },
          { id: 122, name: 'django', isAdmin: false }
];

router.get('/', (req, res) => {
          res.json(users);
});

module.exports = router;