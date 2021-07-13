export const getGroupingData = (employees) => employees.map((employee) => ({
  id: employee.id,
  text: `${employee.first_name} ${employee.last_name}`,
}));

export const getSchedulerData = (shifts) => shifts.map((shift) => ({
  text: `${shift.role.name}`,
  employeeId: shift.employee_id,
  roleId: shift.role_id,
  startDate: shift.start_time,
  endDate: shift.end_time,
  breakDuration: shift.break_duration,
}));

export const getRoleResource = (roles) => roles.map((role) => ({
  id: role.id,
  color: role.background_colour,
}));
