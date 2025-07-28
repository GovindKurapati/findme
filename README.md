# FindMe Dashboard

A full-stack performance metrics dashboard built with Next.js frontend and Node.js/Express backend.

## Project Overview

FindMe Dashboard is a comprehensive performance monitoring application that provides real-time visualization of:
- User statistics and activity metrics
- Application performance metrics
- System health monitoring
- Server usage analytics by country and state

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Redux Toolkit** - State management
- **Recharts** - Interactive charts and visualizations
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **CORS** - Cross-origin resource sharing

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd findme
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # See backend/README.md for detailed setup instructions
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   # See frontend/README.md for detailed setup instructions
   ```


## Project Structure

```
findme/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/    # API controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── config/         # Database configuration
│   └── README.md           # Backend setup instructions
├── frontend/               # Next.js application
│   ├── src/
│   │   ├── app/           # Next.js app router
│   │   ├── components/    # React components
│   │   ├── store/         # Redux store and slices
│   │   └── utils/         # Utility functions
│   └── README.md          # Frontend setup instructions
└── README.md              # This file
```

## Documentation

For detailed setup and running instructions, please refer to:

- **[Backend README](./backend/README.md)** - Backend setup, API endpoints, and database configuration
- **[Frontend README](./frontend/README.md)** - Frontend setup, environment variables, and development workflow

## Development

### Environment Variables

**Backend** (`.env` in backend directory):
```env
PORT=4000
MONGODB_URI=<ADD_MONGODB_URI>
```

**Frontend** (`.env` in frontend directory):
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```