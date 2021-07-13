import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRolesAPI, getShiftsAPI, getEmployeeAPI } from 'api';

export const getRoles = createAsyncThunk(
  '/roles',
  async (payload, thunkAPI) => {
    const response = await getRolesAPI();
    if (!response.success) {
      thunkAPI.rejectWithValue(response);
    }
    return response.data;
  },
);

export const getEmployees = createAsyncThunk(
  '/employees',
  async (payload, thunkAPI) => {
    const response = await getEmployeeAPI();
    if (!response.success) {
      thunkAPI.rejectWithValue(response);
    }
    return response.data;
  },
);

export const getShifts = createAsyncThunk(
  '/shift',
  async (payload, thunkAPI) => {
    const response = await getShiftsAPI();
    if (!response.success) {
      thunkAPI.rejectWithValue(response);
    }
    return response.data;
  },
);

const schedulerSlice = createSlice({
  name: 'scheduler',
  initialState: {
    roles: [],
    shifts: [],
    employees: [],
    isFetchingRoles: false,
    isFetchingShifts: false,
    isFetchingEmployees: false,
    error: undefined,
  },
  reducers: {
    setRoles(state, action) {
      state.roles = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getRoles lifecycle handlers
    builder.addCase(getRoles.fulfilled, (state, action) => {
      if (action.payload) {
        const { roles } = action.payload;
        state.roles = roles;
        state.isFetchingRoles = false;
      }
    });
    builder.addCase(getRoles.pending, (state) => {
      state.isFetchingRoles = true;
      state.roles = [];
      state.error = undefined;
    });
    builder.addCase(getRoles.rejected, (state, action) => {
      if (action.payload) {
        const { error } = action.payload;
        state.isFetchingRoles = false;
        state.roles = [];
        state.error = error;
      }
    });
    // getShift lifecycle handlers
    builder.addCase(getShifts.fulfilled, (state, action) => {
      if (action.payload) {
        const { shifts } = action.payload;
        state.shifts = shifts;
        state.isFetchingShifts = false;
      }
    });
    builder.addCase(getShifts.pending, (state) => {
      state.isFetchingShifts = true;
      state.shifts = [];
      state.error = undefined;
    });
    builder.addCase(getShifts.rejected, (state, action) => {
      if (action.payload) {
        const { error } = action.payload;
        state.isFetchingShifts = false;
        state.shifts = [];
        state.error = error;
      }
    });
    // getEmployee lifecycle handlers
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      if (action.payload) {
        const { employees } = action.payload;
        state.employees = employees;
        state.isFetchingEmployees = false;
      }
    });
    builder.addCase(getEmployees.pending, (state) => {
      state.isFetchingEmployees = true;
      state.employees = [];
      state.error = undefined;
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      if (action.payload) {
        const { error } = action.payload;
        state.isFetchingEmployees = false;
        state.employees = [];
        state.error = error;
      }
    });
  },
});

export const { setRoles } = schedulerSlice.actions;

export default schedulerSlice.reducer;
