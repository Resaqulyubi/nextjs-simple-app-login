# Simple App

A Next.js application with authentication and MySQL database integration.

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- MySQL2
- NextAuth.js
- TailwindCSS
- Bcrypt.js

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables (create a `.env` file in the root directory)

4. Run the development server:
```bash
npm run dev
```

5. For production:
```bash
npm run build
npm start
```

## Features

- Next.js App Router
- Authentication system
- MySQL database integration
- Custom server configuration
- Responsive design with TailwindCSS

## Technical Details

### Authentication
- Uses NextAuth.js for secure authentication
- Custom JWT-based authentication flow
- Bcrypt for password hashing
- Protected API routes and middleware
- Secure session management

### Database
- MySQL database with connection pooling
- Prepared statements for SQL injection prevention
- Schema includes user management tables
- Custom database utility functions for connection handling

### Frontend
- Server and Client Components architecture
- React Context for state management
- TailwindCSS for responsive styling
- Custom loading and error states
- Dynamic routing with Next.js App Router

### Backend
- Custom Express server configuration
- API routes with proper error handling
- Environment-based configuration
- TypeScript for type safety
- Logging system for debugging

## Project Structure

```
simple-app/
├── app/                    # Next.js 13+ App Directory
│   ├── api/               # API routes
│   │   └── auth/         # Authentication endpoints
│   ├── context/          # React Context providers
│   ├── dashboard/        # Dashboard page
│   ├── login/           # Login page
│   ├── ClientLayout.tsx  # Client-side layout component
│   ├── RootLayout.tsx   # Root layout component
│   ├── layout.tsx       # Main layout component
│   ├── page.tsx         # Home page
│   ├── loading.tsx      # Loading state
│   ├── error.tsx        # Error handling
│   └── not-found.tsx    # 404 page
├── lib/                  # Utility functions
│   ├── db.ts            # Database utilities
│   └── logger.ts        # Logging utilities
├── public/              # Static files
├── server.js            # Custom server configuration
├── schema.sql           # Database schema
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linting
