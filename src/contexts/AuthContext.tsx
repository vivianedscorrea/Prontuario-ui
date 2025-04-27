
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Mock credentials
  const validCredentials = {
    email: 'user@gmail.com',
    password: '123'
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication logic
    if (email === validCredentials.email && password === validCredentials.password) {
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
      toast({
        title: 'Login realizado com sucesso',
        description: 'Bem-vindo ao Sistema de Gestão de Saúde',
      });
      return true;
    } else {
      toast({
        title: 'Falha no login',
        description: 'Email ou senha incorretos',
        variant: 'destructive',
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
    toast({
      title: 'Logout realizado',
      description: 'Você saiu do sistema com sucesso',
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
