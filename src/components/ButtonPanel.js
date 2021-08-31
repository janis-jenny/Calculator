import PropTypes from 'prop-types';
import Button from './Button';
import buttonStyles from '../style/buttons.module.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;

  return (
    <div className={buttonStyles.wrapper}>
      <div>
        <Button name="C" type={`${buttonStyles.button} ${buttonStyles.white}`} clickHandler={clickHandler} />
        <Button name="+/-" type={`${buttonStyles.button} ${buttonStyles.orange}`} clickHandler={clickHandler} />
        <Button name="%" type={`${buttonStyles.button} ${buttonStyles.orange}`} clickHandler={clickHandler} />
        <Button name="/" type={`${buttonStyles.button} ${buttonStyles.orange}`} clickHandler={clickHandler} />
      </div>
      <div>
        <Button name="7" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="8" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="9" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="X" type={`${buttonStyles.button} ${buttonStyles.orange}`} clickHandler={clickHandler} />
      </div>
      <div>
        <Button name="4" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="5" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="6" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="-" type={`${buttonStyles.button} ${buttonStyles.orange}`} clickHandler={clickHandler} />
      </div>
      <div>
        <Button name="1" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="2" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="3" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="+" type={`${buttonStyles.button} ${buttonStyles.orange}`} clickHandler={clickHandler} />
      </div>
      <div className={buttonStyles.lastRow}>
        <Button name="." type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="0" type={`${buttonStyles.button}`} clickHandler={clickHandler} />
        <Button name="=" type={`${buttonStyles.equal}`} clickHandler={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
