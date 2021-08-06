/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-else-return */
/* eslint-disable no-fallthrough */
/* eslint-disable indent */
/* import Big from 'big.js';
import operate from './operate'; */

const calculate = (data, btnName) => {
  // eslint-disable-next-line no-console
  console.log(data);
  const { total, next, operation } = data;
  // const { operation } = data;

  // Multiply by -1, the lastly typed number
  if (btnName === '+/-') {
    if (!next) return { total: (total * -1).toString(), next, operation };
    if (!total) return { total, next: (next * -1).toString(), operation };
  }

  // Add a dot at the end of the recently typed number
  if (btnName === '.') {
    if (!next) return { total: `${total}${btnName}`, next, operation };
    if (!total) return { total, next: `${next}${btnName}`, operation };
    if (next === '0') return { total, next: `${0}${btnName}`, operation };
  }

  // Reset all values if AC is clicked or the result/total is an error
  if (btnName === 'AC' || total === 'Error') {
    return { total: null, next: null, operation: null };
  }

  /* switch (btnName) {
    case '+':
    case '-':
    case 'X':
    case '/':
      operation = btnName;
      total = next;
      next = null;
    case '=':

      /* if (!operation && total && next) {
        total = Big(next).toString();
      } else if (!total && !next && btnName !== '=') {
        total = '0';
      } else if (!total) {
        total = next;
      } else if (!next) {
        total = operate(total, next, operation);
      }
      if (btnName === '=') {
        operation = null;
      } else {
        operation = btnName;
      }
      next = null;
      break; */

    /*   if (operation) {
        total = operate(total, next, btnName);
        return { total, next, operation };
      } */
    /* case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (!total) return { total: btnName, next, operation };
      
      if (!operation) {
        total += btnName;
        return { total, next, operation };
      }
      if (operation && next) {
        next = btnName;
        return { total, next, operation };
      } else {
        next += btnName;
        return { total, next, operation };
      }
      /* case '%':
      if (next) {
        next = operate(next, 0, btnName);
      } else if (total) {
        total = operate(total, 0, btnName);
      }
      break; */
    /*  case '=':
      if (total && next) {
        total = operate(total, next, operation);
      } else {
        total = next;
        next = null;
      }
    default:
      return data;
  } */

  return { total, next, operation };
};

export default calculate;
