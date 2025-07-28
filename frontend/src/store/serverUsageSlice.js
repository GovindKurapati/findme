import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from './config';

export const fetchServerUsage = createAsyncThunk(
  'serverUsage/fetchServerUsage',
  async () => {
    const res = await fetch(API_ENDPOINTS.SERVER_USAGE);
    const data = await res.json();
    return data;
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