import { render, fireEvent } from '@testing-library/react';
import ButtonPanel from '../ButtonPanel';

describe('ButtonPanel Component', () => {
  const clickHandler = jest.fn();
  const btnPanel = <ButtonPanel clickHandler={clickHandler} />;
  const allButtonsText = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '+',
    '1', '2', '3', '-', '0', '.', '='];

  it('Should successfully render the ButtonPanel Component', () => {
    render(btnPanel);
  });

  it('Should render 19 button components', () => {
    const { getByText } = render(btnPanel);

    // Check if all 19 buttons with their text were rendered correctly
    allButtonsText.forEach((btnText) => getByText(btnText));
  });

  it('Should call a clickHandler every time a button is clicked', () => {
    const { getByText } = render(btnPanel);
    // Click on all 19 buttons
    allButtonsText.forEach((btnText) => {
      const btn = getByText(btnText);
      fireEvent.click(btn, clickHandler);
    });
    expect(clickHandler).toBeCalledTimes(19);
  });
});
