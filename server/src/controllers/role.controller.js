const database = require("../database");

const getAllRoles = async () => {
  const roles = await database.role.findMany();
  return roles;
};

module.exports = {
  getAllRoles,
};
