import PropTypes from 'prop-types';

function Button( props ) {
  return (
    <button type="button">
      { props.name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;