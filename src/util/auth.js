
  const isAdmin = function (req, res, next) {
    if(req.currentUser && req.currentUser.get() && req.currentUser.get().role === 'admin') {
      next();
    } else {
      res.json({message: 'invalido'})
    }
  };
  
  module.exports = isAdmin;