import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders donate button', () => {
  const { getByText } = render(<Button>Donate</Button>);
  const buttonElement = getByText(/donate/i);
  expect(buttonElement).toBeInTheDocument();
});
