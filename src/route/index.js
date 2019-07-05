const loginRoute = require('./loginRoute');

const routes = (app) => {
  loginRoute(app)
};

module.exports = routes;