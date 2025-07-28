// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// API endpoints
export const API_ENDPOINTS = {
  USER_STATS: `${API_BASE_URL}/api/performance-metrics/user-stats`,
  APP_PERFORMANCE: `${API_BASE_URL}/api/performance-metrics/app-performance`,
  SYSTEM_HEALTH: `${API_BASE_URL}/api/performance-metrics/system-health`,
  SERVER_USAGE: `${API_BASE_URL}/api/performance-metrics/server-usage`,
}; 