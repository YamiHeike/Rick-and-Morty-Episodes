import Button from '../Components/Button';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';

//The test themselves work, I'll need to look closer at the details
test('Demo', () => {
  expect(true).toBe(true);
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ pathname: '/' }),
  useParams: () => ({}),
}));

test('renders Button component', () => {
  render(
    <MemoryRouter>
      <Button text="Test Button" />
    </MemoryRouter>
  );

  const buttonElement = screen.getByTestId('btn');
  expect(buttonElement).toBeInTheDocument();
});