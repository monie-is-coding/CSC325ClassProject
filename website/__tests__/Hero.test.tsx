// Hero.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero', () => {
  it('renders a main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders a subheading', () => {
    render(<Hero />);
    const subheading = screen.getByText(/your subheading here/i); // <-- Replace with actual subheading text
    expect(subheading).toBeInTheDocument();
  });

  it('renders a CTA (Call to Action) button', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('button', { name: /get started/i }); // <-- Replace with actual button text
    expect(ctaButton).toBeInTheDocument();
  });

  it('renders the hero visual (image or icon)', () => {
    render(<Hero />);
    const heroVisual = screen.getByAltText(/hero visual/i); // <-- Replace with actual alt text
    expect(heroVisual).toBeInTheDocument();
  });
});
