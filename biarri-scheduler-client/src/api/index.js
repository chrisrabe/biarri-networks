import http from 'services/http.service';
import { errorHandler } from 'utils/helpers';

export const getRolesAPI = async () => {
  try {
    const url = '/api/v1/role';
    const { data } = await http.get(url);
    return { data, success: 'Retrieved roles successfully' };
  } catch (e) {
    return {
      error: errorHandler(e),
    };
  }
};

export const getShiftsAPI = async () => {
  try {
    const url = '/api/v1/shift';
    const { data } = await http.get(url);
    return { data, success: 'Retrieved shifts successfully' };
  } catch (e) {
    return {
      error: errorHandler(e),
    };
  }
};
