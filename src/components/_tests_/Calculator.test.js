import renderer from 'react-test-renderer';
import Display from '../Display';

describe('Calculator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <Display />
      </>,
    );
    expect(tree).toMatchSnapshot();
  });
});
