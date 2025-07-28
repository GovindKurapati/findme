# FindMe Frontend

A Next.js dashboard application for performance metrics visualization.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```
   
   This environment variable is used by the Redux store to connect to the backend API.

3. **Backend Setup**
   - Ensure the backend server is running on port 4000
   - Or update `NEXT_PUBLIC_API_URL` in `.env` file to point to your backend
   - The frontend will automatically use this URL for all API calls

## Running the Application

**Development:**
```bash
npm run dev
```

The application will start on `http://localhost:3000/performance-metrics`

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── performance-metrics/  # Performance Metric page
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   └── provider.js          # Redux provider
├── components/
│   ├── Charts/              # Chart components
│   ├── MetricCard.js        # Metric display cards
│   └── PerformanceCard.js   # Performance cards
├── store/
│   ├── config.js            # API configuration
│   ├── index.js             # Redux store setup
│   └── slices/              # Redux slices
└── utils/
    └── chartColors.js       # Chart color utilities
```

## Features

- **Performance Dashboard** - Real-time metrics visualization
- **Interactive Charts** - Bar charts, pie charts, area charts
- **Responsive Design** - Mobile and desktop optimized
- **Redux State Management** - Centralized state management
- **Tailwind CSS** - Modern styling framework

## Dependencies

### Core
- **Next.js 15** - React framework
- **React 19** - UI library
- **Redux Toolkit** - State management
- **Recharts** - Chart library

### UI/UX
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **State Management**: Redux Toolkit
- **Charts**: Recharts
- **Icons**: Lucide React