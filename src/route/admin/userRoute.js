const {User, Check} = require('./../../model');
const userDto = require('../../dto/userDto');

const router = (app) => {
  app.get('/v1/admin/users/:id', (req, res) => {
    User.findOne({where: {id: req.params.id}}).then((user) => {
      res.json(userDto.buildDto(user));
    });
  });

  app.get('/v1/admin/users', (req, res) => {
    User.findAll({}).then((users) => {
      res.json(userDto.buildListDto(users));
    });
  });

  app.put('/v1/admin/users/:id', (req, res) => {
    User.update(req.body, { where: { id: req.params.id } }).then((result,user) => {
      res.status(200).json(result);
    });
  });

  app.post('/v1/admin/users/:id/checks', (req, res) => {
    const check = req.body;
    check.userId = req.params.id;

    User.findOne({where: {id: req.params.id}}).then((user) => {
      return Check.create(check);
    }).then((checkCreated) => {
      res.json(checkCreated)
    });
  });

  app.put('/v1/admin/users/:userId/checks/:id', (req, res) => {
    const check = req.body;
    const {id, userId} = req.params;
    Check.update(check, {where: {id, userId}}).then((user) => {
      res.json(user);
    });
  });
};

module.exports = router;