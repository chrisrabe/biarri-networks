import { combineReducers } from '@reduxjs/toolkit';

import schedulerReducer from '../slices/scheduler.slice';

const rootReducer = combineReducers({
  scheduler: schedulerReducer,
});

export default rootReducer;
