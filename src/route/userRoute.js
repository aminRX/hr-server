const {User} = require('./../model');
const userDto = require('./../dto/userDto');

const router = (app) => {
  app.get('/v1/users/:id', (req, res) => {
    const { id } = req.params;
    User.findOne({where: {id}}).then((user) => {
      res.json(userDto.buildDto(user));
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });

  app.get('/v1/users/:id/checks', (req, res) => {
    const {id} = req.params;
    User.findByPk(id, { include: ['Checks'] }).then((user) => {
      res.json(userDto.buildDtoWithChecks(user))
    }).catch((err) => {
      return res.status(500).json(err)
    });
  });
};

module.exports = router;