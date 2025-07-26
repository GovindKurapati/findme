import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchServerUsage = createAsyncThunk(
  'serverUsage/fetchServerUsage',
  async () => {
    const res = await fetch('http://localhost:4000/api/performance-metrics/server-usage');
    const data = await res.json();
    return data; // returns a single object
  }
);

const serverUsageSlice = createSlice({
  name: 'serverUsage',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServerUsage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServerUsage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchServerUsage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default serverUsageSlice.reducer; 