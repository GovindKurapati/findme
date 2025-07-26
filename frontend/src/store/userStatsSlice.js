import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserStats = createAsyncThunk(
  'userStats/fetchUserStats',
  async () => {
    const res = await fetch('http://localhost:4000/api/performance-metrics/user-stats');
    const data = await res.json();
    return data;
  }
);

const userStatsSlice = createSlice({
  name: 'userStats',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserStats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserStats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserStats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userStatsSlice.reducer;
