const { Type } = require("../../db");

const getTypes = async (req, res, next) => {
  const types = await Type.findAll();
  return res.json({
    data: types
  });
};

module.exports = getTypes;