import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App Component', () => {
  const appComponent = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  it('Should render the App component successfully', () => {
    render(appComponent);
  });

  it('Should display the navbar', () => {
    const { getByText } = render(appComponent);
    getByText('Home');
    getByText('Calculator');
    getByText('Quotes');
  });

  it('Should navigate to the calculator page if "Calculator" tab is clicked', () => {
    const { getByText, getAllByRole } = render(appComponent);
    const btn = getByText('Calculator');
    fireEvent.click(btn);
    const calculatorBtns = getAllByRole('button');
    expect(calculatorBtns.length).toBe(19);
  });

  it('Should navigate to the quotes page if "Quotes" tab is clicked', () => {
    const { getByText } = render(appComponent);
    const btn = getByText('Quotes');
    fireEvent.click(btn);
    getByText('Keep going forward because success will come');
  });

  it('Should render the Calculator page correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
