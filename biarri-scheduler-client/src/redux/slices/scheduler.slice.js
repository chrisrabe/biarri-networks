import { createSlice } from '@reduxjs/toolkit';

const schedulerSlice = createSlice({
  name: 'scheduler',
  initialState: {
    roles: [],
  },
  reducers: {
    setRoles(state, action) {
      state.roles = action.payload;
    },
  },
});

export const { setRoles } = schedulerSlice.actions;

export default schedulerSlice.reducer;
