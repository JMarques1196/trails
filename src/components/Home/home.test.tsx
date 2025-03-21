import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Homepage from './home';

// Mock the css import since we don't need to test styles
vi.mock('./home.css', () => ({}));

// Create a wrapper for the component that provides the routing context
const renderWithRouter = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Homepage', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Homepage />);
    expect(screen.getByText('Welcome to trails!')).toBeInTheDocument();
  });

  it('displays the welcome heading', () => {
    renderWithRouter(<Homepage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Welcome to trails!');
  });

  it('displays the description paragraphs', () => {
    renderWithRouter(<Homepage />);
    expect(screen.getByText("This is a project I've created to share my Outdoor activities!")).toBeInTheDocument();
    expect(screen.getByText("This is a work in progress, and it's still in early stages.")).toBeInTheDocument();
  });

  it('contains a navigation link to the menu page', () => {
    renderWithRouter(<Homepage />);
    const link = screen.getByText('Get started!');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/menu');
  });

  it('has the correct class names', () => {
    renderWithRouter(<Homepage />);

    const headingElement = screen.getByText('Welcome to trails!');
    const parentDiv = headingElement.closest('div');

    expect(parentDiv).not.toBeNull();
    if (parentDiv) {
      expect(parentDiv.className).toContain('home-text');
    }
    
    const linkElement = screen.getByText('Get started!');
    expect(linkElement.className).toContain('link');
  });
  });
