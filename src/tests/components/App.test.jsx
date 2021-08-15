import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../../components/App';

describe('<App />', () => {
  test('It should be balanced', () => {
    render(<App />);
    const input = screen.getByTestId('balancer-input');
    userEvent.type(input, '()');
    const output = screen.findByTestId('balanced');
    expect(output).toBeTruthy();
  });
  test('It should not be balanced', () => {
    render(<App />);
    const input = screen.getByTestId('balancer-input');
    userEvent.type(input, '([');
    const output = screen.findByTestId('not-balanced');
    expect(output).toBeTruthy();
  });
});
