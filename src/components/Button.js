import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;
  return (
    <button type="button" onClick={() => clickHandler(name)}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
