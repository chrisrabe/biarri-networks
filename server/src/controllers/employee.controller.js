const database = require("../database");

const getAllEmployees = async () => {
  const employees = await database.employee.findMany();
  return employees;
};

module.exports = {
  getAllEmployees,
};
