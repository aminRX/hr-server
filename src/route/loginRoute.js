const {User, UserInfo} = require('./../model');
const jwt = require('jsonwebtoken');

const router = (app) => {
  app.post('/v1/login', (req, res) => {
    User.findOne({ where: { email: req.body.email } }).then(function (user) {
      console.log(user.id)
      if (!user) {
        res.status(400).json({ message: 'Invalid Password/Username' });
      } else if (user.validPassword(req.body.password)) {
        var token = jwt.sign({ userId: user.id }, process.env.TOKEN_KEY);
        res.status(200).json({
          userId: user.id,
          token
        })
      } else {
        res.status(400).json({ message: 'Invalid Password/Username' });
      }
    });
  });

  app.post('/v1/signup', (req, res) => {
    User.create({ email: req.body.email, password: req.body.password }).then((user) => {
      
      if(!user) {
        res.status(500).json({});
      }
      let userInfo = req.body.userInfo;
      userInfo.userId = user.id;

      UserInfo.create(userInfo).then((userInfo) => {
        res.status(200).json({
        })
      });
    });
  });
};

module.exports = router;