import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  render(<Header />);
  const menuElement = screen.getByText(/item1/i);
  expect(menuElement).toBeInTheDocument();
});
