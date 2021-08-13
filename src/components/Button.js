import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler, type } = props;
  return (
    <button type="button" className={type} onClick={() => clickHandler(name)}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
