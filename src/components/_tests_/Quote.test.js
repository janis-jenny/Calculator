import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quotes from '../Quotes';
import '@testing-library/jest-dom';

it('Should contain the head', () => {
  const { getByText } = render(<Quotes />);
  const head = getByText(/Technology/);
  expect(head).toBeInTheDocument();
});

it('Should contain the text', () => {
  const head = screen.queryByText('hello');
  expect(head).not.toBeInTheDocument();
});

describe('Quotes', () => {
  it('renders correctly', () => {
    const page = renderer.create(<Quotes />);
    expect(page).toMatchSnapshot();
  });
});
