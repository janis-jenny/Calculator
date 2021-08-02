import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <p>{ result }</p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = { result: '0' };

export default Display;
