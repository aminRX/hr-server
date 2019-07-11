const {User} = require('./../model');
const userDto = require('../dto/userDto');

const jwt = require('jsonwebtoken');

const router = (app) => {
  app.post('/v1/login', (req, res) => {
    User.findOne({ where: { email: req.body.email } }).then(function (user) {
      if (!user) {
        res.status(403).json({ message: 'Invalid Password/Username' });
      } else if (user.validPassword(req.body.password)) {
        var token = jwt.sign({ userId: user.id }, process.env.TOKEN_KEY);
        res.status(200).json({
          userId: user.id,
          token,
          role: user.role
        })
      } else {
        res.status(403).json({ message: 'Invalid Password/Username' });
      }
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });

  app.post('/v1/signup', (req, res) => {
    const userBody = userDto.buildCreateDto(req.body);

    console.log(req.body);
    console.log(userBody)
    User.create(userBody).then((user) => {
      if(!user) {
        res.status(500).json({});
      }
      res.status(200).json(user)
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });
};

module.exports = router;