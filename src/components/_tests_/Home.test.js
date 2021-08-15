import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Home component renders correctly', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
