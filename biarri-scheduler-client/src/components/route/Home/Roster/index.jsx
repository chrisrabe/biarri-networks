import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import config from 'config.json';
import Shift from 'models/shift';
import { getSchedulerData, getGroupingData, getRoleResource } from './utils';

const views = [
  {
    type: 'day',
    name: 'Day',
    groupOrientation: 'horizontal',
  },
  {
    type: 'week',
    name: 'Week',
    groupOrientation: 'horizontal',
  },
];

const groups = ['employeeId'];

const Roster = (props) => {
  const { shifts, employees, roles } = props;

  const scheduleData = useMemo(() => getSchedulerData(shifts), [shifts]);
  const groupData = useMemo(() => getGroupingData(employees), [employees]);
  const roleData = useMemo(() => getRoleResource(roles), [roles]);

  return (
    <Scheduler
      timeZone={config.timezone}
      dataSource={scheduleData}
      views={views}
      groups={groups}
      defaultCurrentView="week"
    >
      <Resource
        fieldExpr="employeeId"
        allowMultiple={false}
        dataSource={groupData}
      />
      <Resource dataSource={roleData} fieldExpr="roleId" useColorAsDefault />
    </Scheduler>
  );
};

Roster.propTypes = {
  shifts: PropTypes.arrayOf(Shift).isRequired,
};

export default Roster;
