'use strict';

module.exports.buildDto = (model) => {
  return {
    id: model.id,
    day: model.day,
    checkIn: model.checkIn,
    checkOut: model.checkOut,
    userId: model.userId,
    createdAt: model.createAt,
    updatedAt: model.updatedAt
  };
};

module.exports.buildUpdateDto = (model) => {
  return {
    day: model.day,
    checkIn: model.checkIn,
    checkOut: model.checkOut,
    userId: model.userId
  };
};


module.exports.buildCreateDto = (model) => {
  return {
    day: model.day,
    checkIn: model.checkIn,
    checkOut: model.checkOut,
    userId: model.userId
  };
};

module.exports.buildListDto = (modelList) => {
  return modelList.map((model) => {
    return module.exports.buildDto(model);
  });
};