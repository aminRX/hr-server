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
};

module.exports = setup;