
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });
  
  it('renders different variants correctly', () => {
    render(<Button variant="destructive">Delete</Button>);
    
    const button = screen.getByRole('button', { name: /delete/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-destructive', 'text-destructive-foreground');
  });

  it('renders different sizes correctly', () => {
    render(<Button size="sm">Small</Button>);
    
    const button = screen.getByRole('button', { name: /small/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('h-9');
  });
});
