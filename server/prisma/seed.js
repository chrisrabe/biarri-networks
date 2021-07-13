const { PrismaClient } = require("@prisma/client");
const roles = require("./files/roles.json");
const employees = require("./files/employees.json");
const shifts = require("./files/shifts.json");

const prisma = new PrismaClient();

// Transform shifts into prisma schema

const generatePrismaData = () => {
  const employeeData = employees.reduce((acc, item) => {
    acc[item.id] = {
      first_name: item.first_name,
      last_name: item.last_name,
    };
    return acc;
  }, {});
  const roleData = roles.reduce((acc, item) => {
    acc[item.id] = {
      background_colour: item.background_colour,
      name: item.name,
      text_colour: item.text_colour,
    };
    return acc;
  }, {});

  const prismaData = shifts.map((shift) => {
    const data = {
      start_time: shift.start_time,
      end_time: shift.end_time,
      break_duration: shift.break_duration,
    };
    // map employee
    data.employee = {
      create: employeeData[shift.employee_id],
    };
    data.role = {
      create: roleData[shift.role_id],
    };
    return data;
  });

  return prismaData;
};

const populateDb = async (items) => {
  for (const item of items) {
    await prisma.shift.create({
      data: item,
      include: {
        employee: true,
        role: true,
      },
    });
  }
};

const data = generatePrismaData();
populateDb(data)
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
