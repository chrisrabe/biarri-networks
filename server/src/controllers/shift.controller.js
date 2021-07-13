const database = require("../database");

const getAllShifts = async () => {
  const shifts = await database.shift.findMany();
  return shifts;
};

module.exports = {
  getAllShifts,
};
