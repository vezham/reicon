import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {MemoryRouter} from 'react-router-dom';
import {describe, expect, it} from 'vitest';

import App from '@/src/App';
import Footer from '@/src/components/layout/Footer';
import Header from '@/src/components/layout/Header';
import {ThemeProvider} from '@/src/components/layout/ThemeContext';
import VezhamIcon from '@/src/components/ui/VezhamIcon';

describe('App smoke test', () => {
  it('renders without crashing', () => {
    const {container} = render(
      <HelmetProvider>
        <App />
      </HelmetProvider>,
    );
    expect(container).toBeInTheDocument();
  });
});

describe('Header smoke test', () => {
  it('renders navigation', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(screen.getAllByText('Icons')[0]).toBeInTheDocument();
  });
});

describe('Footer smoke test', () => {
  it('renders footer content', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(screen.getAllByText('Vezham').length).toBeGreaterThanOrEqual(1);
  });
});

describe('VezhamIcon component', () => {
  it('renders a custom element with correct props', () => {
    const {container} = render(
      <VezhamIcon icon="home" weight="filled" size={24} color="red" />,
    );
    const el = container.querySelector('vx-icon');
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute('icon', 'home');
    expect(el).toHaveAttribute('weight', 'filled');
    expect(el).toHaveAttribute('size', '24');
    expect(el).toHaveAttribute('color', 'red');
  });
});
