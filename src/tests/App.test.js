import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

describe('Tests UI', () => {

  test('Checks if there is a "is it balanced" string', () => {
    render(<App />);
    const linkElement = screen.getByText(/is it balanced/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('It should say yes', () => {
    render(<App />);
    const input = screen.getByTestId("balancer-input");
    userEvent.type(input, "()");
    const output = screen.getByTestId("balancer-output");
    expect(output).toHaveTextContent(/Yes/);
  });
  test('It should say no', () => {
    render(<App />);
    const input = screen.getByTestId("balancer-input");
    userEvent.type(input, "([");
    const output = screen.getByTestId("balancer-output");
    expect(output).toHaveTextContent(/No/);
  });
});