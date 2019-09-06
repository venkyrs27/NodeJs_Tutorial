const User = require('../models/user');

const get = async (req, res) => {

          try {
                    const users = await User.find().select('-__v');
                    res.json(users);
          } catch (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ message: err.message });
          }
}

const create = async (req, res) => {

          const user = new User({
                    ...req.body
          });
          try {
                    await user.save();
                    res.status(201).send(user);
          } catch (err) {
                    console.log('Error: ', err);
                    res.status(500).json({ message: err.message });
          };

}

const update = async (req, res) => {

          try {
                    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
                    res.send(user);
                    if (!user) {
                              return res.status(404).json({ message: 'user not found!' });
                    }
          } catch (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ message: err.message });
          }

}

const remove = async (req, res) => {

          try {
                    const user = await Product.findByIdAndDelete(req.params.id);
                    if (!user) {
                              return res.status(404).json({ message: 'user not found!' });
                    }
                    res.send(user);
          } catch (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ message: err.message });
          }

          res.send({ message: `user with ${user.name} deleted sucessfully` });
}



module.exports = {
          get,
          create,
          update,
          remove
}