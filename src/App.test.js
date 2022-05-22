import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker and Kubernetes with Stephen Grider and Olusola Akinsulere. We are best friends./i);
  expect(linkElement).toBeInTheDocument();
});
