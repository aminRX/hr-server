const loginRoute = require('./loginRoute');
const userAdminRoute = require('./admin/userRoute');
const userRoute = require('./userRoute');

const routes = (app) => {
  loginRoute(app)
  // admin
  userAdminRoute(app)

  // employ
  userRoute(app)
};

module.exports = routes;