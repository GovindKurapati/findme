import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAppPerformance = createAsyncThunk(
  'appPerformance/fetchAppPerformance',
  async () => {
    const res = await fetch('http://localhost:4000/api/performance-metrics/app-performance');
    const data = await res.json();
    return data; // returns a single object
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