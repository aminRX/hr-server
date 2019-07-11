const loginRoute = require('./loginRoute');
const userAdminRoute = require('./admin/userRoute');
const checkAdminRoute = require('./admin/checkRoute');
const userRoute = require('./userRoute');

const routes = (app) => {
  loginRoute(app)
  // admin
  userAdminRoute(app)
  checkAdminRoute(app)

  // employ
  userRoute(app)
};

module.exports = routes;