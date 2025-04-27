
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';
import { Card } from '@/components/ui/card';

const AuthLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="medical-container py-6">
        <Card className="p-6">
          <Outlet />
        </Card>
      </main>
    </div>
  );
};

export default AuthLayout;
