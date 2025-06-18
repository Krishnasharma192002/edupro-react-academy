
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string) => {
    try {
      // Simulate API call
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: role as 'student' | 'teacher' | 'admin',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      const token = 'mock-jwt-token';
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (email: string, password: string, name: string, role: string) => {
    try {
      // Simulate API call
      const mockUser: User = {
        id: '1',
        email,
        name,
        role: role as 'student' | 'teacher' | 'admin',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      const token = 'mock-jwt-token';
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
