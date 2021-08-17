import { render } from '@testing-library/react';
import Display from '../Display';

describe('Display Component', () => {
  const result = '9';
  const displayComponent = <Display result={result} />;

  it('Renders the Display component successfully', () => {
    render(displayComponent);
  });

  it('Prints value passed via props', () => {
    const { getByText } = render(displayComponent);
    getByText('9');
  });
});
