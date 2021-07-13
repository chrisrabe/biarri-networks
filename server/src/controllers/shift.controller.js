const database = require("../database");

const getAllShifts = async () => {
  const shifts = await database.shift.findMany({
    include: {
      employee: true,
      role: true,
    },
  });
  return shifts;
};

module.exports = {
  getAllShifts,
};
