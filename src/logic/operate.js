import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = Big(0);
  const a = Big(numberOne);
  const b = Big(numberTwo);

  switch (operation) {
    case '+':
      result = a.plus(b);
      break;

    case '-':
      result = a.minus(b);
      break;

    case 'X':
      result = a.times(b);
      break;

    case '/':
      result = a.div(b);
      break;

    case '%':
      result = a.mod(100);
      break;

    default:
      throw Error(`Unknown operation '${operation}'`);
  }
  return toString(result);
};

export default operate;
