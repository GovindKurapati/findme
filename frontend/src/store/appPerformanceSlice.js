import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from './config';

export const fetchAppPerformance = createAsyncThunk(
  'appPerformance/fetchAppPerformance',
  async () => {
    const res = await fetch(API_ENDPOINTS.APP_PERFORMANCE);
    const data = await res.json();
    return data;
  }
);

const appPerformanceSlice = createSlice({
  name: 'appPerformance',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppPerformance.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppPerformance.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAppPerformance.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default appPerformanceSlice.reducer; 