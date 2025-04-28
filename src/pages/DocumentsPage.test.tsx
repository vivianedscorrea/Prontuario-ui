
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DocumentsPage from './DocumentsPage';

// Mock useSearchParams
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useSearchParams: () => [
      {
        get: () => 'vaccines',
      },
    ],
    useNavigate: () => vi.fn(),
  };
});

describe('DocumentsPage', () => {
  it('renders the correct title based on document type', () => {
    render(
      <BrowserRouter>
        <DocumentsPage />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Vacinas')).toBeInTheDocument();
    expect(screen.getByText('Gerencie seus documentos médicos')).toBeInTheDocument();
  });

  it('renders the "back" button', () => {
    render(
      <BrowserRouter>
        <DocumentsPage />
      </BrowserRouter>
    );
    
    const backButton = screen.getByText('Voltar');
    expect(backButton).toBeInTheDocument();
  });

  it('renders the upload section', () => {
    render(
      <BrowserRouter>
        <DocumentsPage />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Adicionar Documento')).toBeInTheDocument();
    expect(screen.getByText('Selecionar Arquivo')).toBeInTheDocument();
  });

  it('renders the saved documents section', () => {
    render(
      <BrowserRouter>
        <DocumentsPage />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Documentos Salvos')).toBeInTheDocument();
    expect(screen.getByText('Cartão de Vacinas 2024.pdf')).toBeInTheDocument();
    expect(screen.getByText('Comprovante Vacina Covid.pdf')).toBeInTheDocument();
  });
});
