
'use strict';

module.exports.buildDto = (model) => {
  return {
    id: model.id,
    email: model.email,
    firstName: model.firstName,
    lastName: model.lastName,
    direction: model.direction,
    birthday: model.birthday,
    gender: model.gender,
    archived: model.archived,
    createdAt: model.createAt,
    updatedAt: model.updatedAt
  };
};


module.exports.buildUpdateDto = (model) => {
  return {
    email: model.email,
    firstName: model.firstName,
    lastName: model.lastName,
    direction: model.direction,
    birthday: model.birthday,
    gender: model.gender,
    archived: model.archived
  };
};

module.exports.buildDtoWithChecks = (model) => {
  return {
    id: model.id,
    email: model.email,
    firstName: model.firstName,
    lastName: model.lastName,
    direction: model.direction,
    birthday: model.birthday,
    gender: model.gender,
    archived: model.archived,
    Checks: model.Checks,
    createdAt: model.createAt,
    updatedAt: model.updatedAt
  };
};

module.exports.buildListDto = (modelList) => {
  return modelList.map((model) => {
    return module.exports.buildDto(model);
  });
};