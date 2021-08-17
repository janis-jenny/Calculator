import { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import appStyle from '../style/app.module.css';

const Calculator = () => {
  const [status, setStatus] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnName) => {
    setStatus((prevState) => calculate(prevState, btnName));
  };

  const { total, next } = status;
  let result;
  if (!total && !next) {
    result = '0';
  } else if (!next) {
    result = total;
  } else {
    result = next;
  }

  return (
    <div className={appStyle.app}>
      <>
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </>
    </div>
  );
};

export default Calculator;
