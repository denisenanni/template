import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders learn react link', () => {
  render(<Menu />);
  const content = screen.getByText(/item2/i);
  expect(content).toBeInTheDocument();
});
