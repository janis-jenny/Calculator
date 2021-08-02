import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <button type="button">
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
