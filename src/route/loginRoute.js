const {User} = require('./../model');

const router = (app) => {
  app.post('/v1/login', (req, res) => {
    User.findOne({ where: { email: req.body.email } }).then(function (user) {
      if (!user) {
        console.log('usuario no encontrado')
      } else if (user.validPassword(req.body.password)) {
        console.log('usuario validado')
      } else {
        console.log(user)
      }
    });
  });

  app.post('/v1/signup', (req, res) => {
    console.log(res.body);
    User.create({ email: req.body.email, password: req.body.password }).then((user) => {
      req.json(user);
    });
  });
};

module.exports = router;