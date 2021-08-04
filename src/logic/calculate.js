import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;

  // Multiply by -1, the lastly typed number
  if (btnName === '+/-') {
    if (!next) return { total: (total * -1).toString(), next, operation };
    if (!total) return { total, next: (next * -1).toString(), operation };
  }

  // Add a dot at the end of the recently typed number
  if (btnName === '.') {
    if (!next) return { total: `${total}${btnName}`, next, operation };
    if (!total) return { total, next: `${next}${btnName}`, operation };
  }

  // Reset all values if AC is clicked or the result/total is an error
  if (btnName === 'AC' || total === 'Error') {
    return { total: null, next: null, operation: null };
  }

  switch (btnName) {
    case '+':
    case '-':
    case 'X':
    case '/':
    // case '=':
      if (total && next) {
        total = operate(total, next, operation);
        next = null;
      } else {
        total = next;
        next = null;
      }
      break;
    case '%':
      if (next) {
        next = operate(next, 0, btnName);
      } else if (total) {
        total = operate(total, 0, btnName);
      }
      break;
    /* case '=':
      if (total && next) {
        operation = btnName;
      } else {
        total = next;
        operation = btnName;
      }
      break; */
    default:
      next = next ? next += btnName : btnName;
  }

  return { total, next, operation };
};

export default calculate;
