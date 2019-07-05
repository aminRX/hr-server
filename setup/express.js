var bodyParser = require('body-parser')

/**
 * Setup middlewares for express
 * @param  {express} app the express app
 */
let setupExpressMiddlewares = (app) => {
  app.use(bodyParser.json({ type: 'application/*+json' }))
};

/**
 * Starts the server
 * @param  {express} app the express app
 */
const setupServer = (app) => {
  app.set('port', process.env.PORT || 3000);
  app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}!`))
};

/**
 * Setup express for this app
 * @param  {express} app the express app
 */
const setup = (app) => {
  setupServer(app);
  setupExpressMiddlewares(app)
  require('../src/route')(app);
};

module.exports = setup;