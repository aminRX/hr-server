const {User} = require('./../model');

const router = (app) => {
  app.post('/v1/login', (req, res) => {
    User.findAll.findAll().then(users => {
      console.log("All users:", JSON.stringify(users, null, 4));
    });
  });
};

module.exports = router;