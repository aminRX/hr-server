const {User, Check} = require('./../../model');
const userDto = require('../../dto/userDto');
const isAdmin = require('../../util/auth');

const router = (app) => {
  app.get('/v1/admin/users/:id', isAdmin, (req, res) => {
    User.findOne({where: {id: req.params.id}}).then((user) => {
      res.json(userDto.buildDto(user));
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });

  app.get('/v1/admin/users', isAdmin, (req, res) => {
    User.findAll({}).then((users) => {
      res.json(userDto.buildListDto(users));
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });

  app.put('/v1/admin/users/:id', isAdmin, (req, res) => {
    const userBody = userDto.buildUpdateDto(req.body);
    User.update(userBody, { where: { id: req.params.id } }).then((result,user) => {
      res.status(200).json(result);
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });

  app.post('/v1/admin/users/:id/checks', isAdmin, (req, res) => {
    const check = req.body;
    check.userId = req.params.id;

    User.findOne({where: {id: req.params.id}}).then((user) => {
      return Check.create(check);
    }).then((checkCreated) => {
      res.json(checkCreated)
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });

  app.put('/v1/admin/users/:userId/checks/:id', isAdmin, (req, res) => {
    const check = req.body;
    const {id, userId} = req.params;
    Check.update(check, {where: {id, userId}}).then((user) => {
      res.json(user);
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });
};

module.exports = router;