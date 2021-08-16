import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

describe('Quotes', () => {
  it('renders correctly', () => {
    const page = renderer.create(<Quotes />);
    expect(page).toMatchSnapshot();
  });
});
