import { configureStore } from '@reduxjs/toolkit';
import userStatsReducer from './userStatsSlice';
import appPerformanceReducer from './appPerformanceSlice';
import systemHealthReducer from './systemHealthSlice';
import serverUsageReducer from './serverUsageSlice';

export const store = configureStore({
  reducer: {
    userStats: userStatsReducer,
    appPerformance: appPerformanceReducer,
    systemHealth: systemHealthReducer,
    serverUsage: serverUsageReducer,
  },
});
