# Backend API

A Node.js/Express backend API for the FindMe performance metrics dashboard.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB connection string
- npm or yarn

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=4000
   MONGODB_URI=<ADD_MONGODB_URI>
   ```

3. **Database Setup**
   - Ensure MongoDB is running locally
   - Or use MongoDB Atlas (update MONGODB_URI accordingly)

4. **Seed Data**
   ```bash
   npm run seed
   ```

## Running the Server

5. **Development:**
```bash
npm run start
```

The server will start on `http://localhost:4000`

## API Endpoints

### Performance Metrics
- `GET /api/performance-metrics/user-stats` - User statistics
- `GET /api/performance-metrics/app-performance` - App performance data
- `GET /api/performance-metrics/system-health` - System health metrics
- `GET /api/performance-metrics/server-usage` - Server usage by country/state

## Project Structure

```
src/
├── config/
│   └── database.js      # MongoDB connection
├── controllers/
│   └── performanceMetrics.controller.js
├── models/
│   ├── AppPerformance.js
│   ├── ServerUsage.js
│   ├── SystemHealth.js
│   └── userStats.model.js
├── routes/
│   └── performanceMetrics.route.js
├── services/
│   └── performanceMetrics.service.js
├── utils/
├── app.js               # Express app setup
├── server.js            # Server entry point
└── seed.js              # Database seeding
```

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables

## Scripts

- `npm run seed` - Seed the database with sample data
- `npm run start` - Start the server