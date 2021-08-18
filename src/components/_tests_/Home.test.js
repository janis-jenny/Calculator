import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import '@testing-library/jest-dom';

it('Should contain the title', () => {
  const { getByText } = render(<Home />);
  const head = getByText(/Math/);
  expect(head).toBeInTheDocument();
});

it('Should contain the title', () => {
  const head = screen.queryByText('hello');
  expect(head).not.toBeInTheDocument();
});

it('Home component renders correctly', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
