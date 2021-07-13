import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Scheduler, { Resource, View } from 'devextreme-react/scheduler';
import config from 'config.json';
import Shift from 'models/shift';
import { getSchedulerData, getGroupingData, getRoleResource } from './utils';

const views = [
  {
    type: 'day',
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
    >
      <View name="Day" type="day" groupOrientation="horizontal" />
      <Resource dataSource={roleData} fieldExpr="roleId" useColorAsDefault />
      <Resource
        fieldExpr="employeeId"
        allowMultiple={false}
        dataSource={groupData}
      />
    </Scheduler>
  );
};

Roster.propTypes = {
  shifts: PropTypes.arrayOf(Shift).isRequired,
};

export default Roster;
