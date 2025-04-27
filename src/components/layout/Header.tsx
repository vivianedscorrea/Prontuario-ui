
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { logout, user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="medical-container py-4">
        <div className="flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-medical-primary" />
            <span className="text-xl font-semibold text-gray-900">Bem-Estar Paciente</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <User className="h-4 w-4" />
              <span className="text-sm">{user?.email}</span>
            </Link>
            <Button variant="outline" size="sm" onClick={logout}>
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

