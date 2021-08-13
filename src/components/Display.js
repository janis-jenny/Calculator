import PropTypes from 'prop-types';
import displayStyle from '../style/display.module.css';

function Display({ result }) {
  return (
    <div className={displayStyle.display}>
      { result }
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = { result: '0' };

export default Display;
