import { render } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator component', () => {
  const calculatorComponent = <Calculator />;

  it('Should render successfully the Calculator component', () => {
    render(calculatorComponent);
  });
});
