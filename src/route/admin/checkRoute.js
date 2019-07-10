const {User} = require('./../model');

const router = (app) => {
  app.get('/v1/admin/check/:id', (req, res) => {
    res.status(200).json({});
  });

  app.get('/v1/admin/check/', (req, res) => {
    res.status(200).json({});
  });

  app.put('/v1/admin/check/:id', (req, res) => {
    res.status(200).json({});
  });

  app.post('/v1/admin/check/', (req, res) => {
    res.status(200).json({});
  });
};

module.exports = router;