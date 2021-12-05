import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';

test('renders learn react link', () => {
  render(<MainContent />);
  const content = screen.getByText(/content/i);
  expect(content).toBeInTheDocument();
});
