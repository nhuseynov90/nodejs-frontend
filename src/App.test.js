import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Log Center link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Log Center/i);
  expect(linkElement).toBeInTheDocument();
});
