const { PrismaClient } = require("@prisma/client");
const roles = require("./files/roles.json");
const employees = require("./files/employees.json");
const shifts = require("./files/shifts.json");

const prisma = new PrismaClient();

// Transform shifts into prisma schema

// Generate employees
const populateEmployees = async () => {
  const employeeData = employees.reduce((acc, item) => {
    acc[item.id] = {
      first_name: item.first_name,
      last_name: item.last_name,
    };
    return acc;
  }, {});
  for (const employee of employees) {
    const data = employeeData[employee.id];
    const createdData = await prisma.employee.create({
      data,
    });
    data.prisma_id = createdData.id;
  }
  return employeeData;
};

const populateRoles = async () => {
  const roleData = roles.reduce((acc, item) => {
    acc[item.id] = {
      background_colour: item.background_colour,
      name: item.name,
      text_colour: item.text_colour,
    };
    return acc;
  }, {});
  for (const role of roles) {
    const data = roleData[role.id];
    const createdData = await prisma.role.create({
      data,
    });
    data.prisma_id = createdData.id;
  }
  return roleData;
};

const populateDb = async () => {
  const employeeMap = await populateEmployees();
  const roleMap = await populateRoles();
  const shiftData = shifts.map((shift) => {
    const data = {
      start_time: shift.start_time,
      end_time: shift.end_time,
      break_duration: shift.break_duration,
    };
    // map employee
    data.employee = {
      connect: {
        id: employeeMap[shift.employee_id].prisma_id,
      },
    };
    data.role = {
      connect: {
        id: roleMap[shift.role_id].prisma_id,
      },
    };
    return data;
  });
  // create shifts
  for (const shift of shiftData) {
    await prisma.shift.create({
      data: shift,
      include: {
        employee: true,
        role: true,
      },
    });
  }
};

populateDb()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
