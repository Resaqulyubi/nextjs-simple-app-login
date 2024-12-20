'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { logger } from '@/lib/logger';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      logger.debug('Checking authentication state');
      const auth = localStorage.getItem('isAuthenticated');
      logger.debug('Auth state from storage:', auth);
      if (auth === 'true') {
        setIsAuthenticated(true);
        logger.info('User is authenticated');
      } else {
        logger.info('User is not authenticated');
      }
    } catch (error) {
      logger.error('Error checking auth state:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = () => {
    try {
      logger.debug('Logging in user');
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      logger.info('User logged in successfully');
    } catch (error) {
      logger.error('Error during login:', error);
      throw error;
    }
  };

  const logout = () => {
    try {
      logger.debug('Logging out user');
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
      logger.info('User logged out successfully');
    } catch (error) {
      logger.error('Error during logout:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    logger.error('useAuth must be used within an AuthProvider');
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
