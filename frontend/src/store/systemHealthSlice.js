import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSystemHealth = createAsyncThunk(
  'systemHealth/fetchSystemHealth',
  async () => {
    const res = await fetch('http://localhost:4000/api/performance-metrics/system-health');
    const data = await res.json();
    return data; // returns a single object
  }
);

const systemHealthSlice = createSlice({
  name: 'systemHealth',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSystemHealth.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSystemHealth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSystemHealth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default systemHealthSlice.reducer; 