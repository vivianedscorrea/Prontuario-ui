
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DashboardPage from './DashboardPage';

// Mock useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('DashboardPage', () => {
  it('renders the welcome message', () => {
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Olá, bem-vindo!')).toBeInTheDocument();
    expect(screen.getByText('Selecione o tipo de documento que deseja adicionar:')).toBeInTheDocument();
  });

  it('renders all document type cards', () => {
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    );
    
    const documentTypes = [
      'Vacinas',
      'Laudos Médicos',
      'Prescrições',
      'Orientações',
      'Requisições',
      'Consultas'
    ];
    
    documentTypes.forEach(type => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });
  
  it('renders the correct number of cards', () => {
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    );
    
    const selectButtons = screen.getAllByText('Selecionar');
    expect(selectButtons).toHaveLength(6);
  });
});
