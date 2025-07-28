import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from './config';

export const fetchSystemHealth = createAsyncThunk(
  'systemHealth/fetchSystemHealth',
  async () => {
    const res = await fetch(API_ENDPOINTS.SYSTEM_HEALTH);
    const data = await res.json();
    return data;
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