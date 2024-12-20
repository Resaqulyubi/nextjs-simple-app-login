'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { logger } from '@/lib/logger';

export default function Dashboard() {
  const router = useRouter();
  const { logout, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    logger.debug('Dashboard page - Auth state:', { isAuthenticated, isLoading });
    if (!isLoading && !isAuthenticated) {
      logger.info('User not authenticated, redirecting to login');
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = () => {
    try {
      logger.debug('Logout attempt');
      logout();
      logger.info('Logout successful, redirecting to login');
      router.push('/login');
    } catch (error) {
      logger.error('Logout error:', error);
      alert('Error during logout');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Academic Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Courses</h3>
            <p>View and manage your courses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Assignments</h3>
            <p>Track your assignments and deadlines</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Grades</h3>
            <p>Check your academic performance</p>
          </div>
        </div>
      </main>
    </div>
  );
}
