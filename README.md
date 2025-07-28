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

## Development Approach & Implementation

### Key Decisions
- **Monorepo Structure**: Separate backend and frontend directories for clear separation of concerns
- **Modern Tech Stack**: Next.js 15 with App Router for frontend, Express.js with MongoDB for backend
- **State Management**: Redux Toolkit for centralized state management with async thunks for API calls
- **Environment Configuration**: Centralized API configuration using environment variables
- **Responsive Design**: Mobile-first approach with Tailwind CSS for consistent styling

### Implementation Highlights
- **Real-time Data Visualization**: Interactive charts using Recharts library
- **API-First Design**: RESTful API endpoints with proper error handling
- **Component Architecture**: Reusable components for metrics cards and charts
- **Database Design**: MongoDB with Mongoose for flexible data modeling

### Assumptions
- Used mock data instead of the .csv data

### Known Limitations
- **Real-time Updates**: No WebSocket implementation for live updates
- **Authentication**: No user authentication system implemented
- **Data Validation**: Basic validation on API endpoints
- **Error Handling**: Basic error handling in place

## Implementation Report

### Features Implemented
✅ **Dashboard Overview**: Complete performance metrics dashboard  
✅ **User Statistics**: New sign-ups, active users, inactive users tracking  
✅ **App Performance**: Response time, error rate, uptime monitoring  
✅ **System Health**: CPU usage, memory usage visualization  
✅ **Server Usage**: Geographic distribution by country and state  
✅ **Interactive Charts**: Bar charts, pie charts with responsive design  
✅ **Mobile Responsive**: Optimized for mobile and desktop devices  
✅ **Environment Configuration**: Easy deployment to different environments  

### Technical Considerations
- **Performance**: Optimized chart rendering with Recharts
- **Scalability**: Modular architecture for easy feature additions
- **Maintainability**: Clear separation between frontend and backend

### Trade-offs Made
- **Simplicity over Complexity**: Chose straightforward API structure over advanced features
- **Development Speed**: Used established libraries (Recharts, Lucide, Redux Toolkit) over custom solutions