var bodyParser = require('body-parser')
const {User} = require('../src/model');
var cors = require('cors');
const jwt = require('jsonwebtoken');

/**
 * Setup middlewares for express
 * @param  {express} app the express app
 */
let setupExpressMiddlewares = (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(function (req, res, next) {
    if (req.path === '/' || req.path === '/v1/login') return next();

    try {
      const token = req.headers.authorization;
      jwt.verify(token, process.env.TOKEN_KEY, function (err, payload) {
        console.log(payload)
        if (payload) {
          User.findOne({ where: { id: payload.userId } }).then(
            (user) => {
              req.currentUser = user;
              next()
            }
          )
        } else {
          res.status(400).json({ message: 'User has no permission' });
        }
      })
    } catch (e) {
      res.status(400).json({ message: 'User has no permission' });
    }
  })
};

/**
 * Starts the server
 * @param  {express} app the express app
 */
const setupServer = (app) => {
  app.set('port', process.env.PORT || 8000);
  app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}!`))
};

/**
 * Setup express for this app
 * @param  {express} app the express app
 */
const setup = (app) => {
  setupExpressMiddlewares(app)
  setupServer(app);
  require('../src/route')(app);
};

module.exports = setup;