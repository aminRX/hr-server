const {Check} = require('./../../model');
const checkDto = require('../../dto/checkDto');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const setRangeOfDate = (day) => {
  let startDay = new Date(day);
  startDay.setHours(0, 0, 0, 0);
  let finishDay = new Date(day);
  finishDay.setHours(23, 59, 59, 999);
  return [startDay, finishDay];
};

const router = (app) => {
  app.get('/v1/admin/checks/:id', (req, res) => {
    Check.findOne({where: {id: req.params.id}}).then((check) => {
      res.json(checkDto.buildDto(check));
    });
  });

  app.get('/v1/admin/checks/', (req, res) => {
    Check.findAll({
      where: {
        day: {
          [Op.between]: setRangeOfDate(req.query.day)
        }
      }
    }).then((checks) => {
      res.json(checkDto.buildListDto(checks));
    });
  });

  app.put('/v1/admin/checks/:id', (req, res) => {
    const checkBody = checkDto.buildUpdateDto(req.body);
    Check.update(checkBody, { where: { id: req.params.id } }).then((result) => {
      res.status(200).json(result);
    });
  });

  app.post('/v1/admin/checks/', (req, res) => {
    const checkBody = checkDto.buildCreateDto(req.body)
    Check.create(checkBody).then((check) => {
      if(!check) {
      }
      res.status(200).json(check);
    });
  });
};

module.exports = router;