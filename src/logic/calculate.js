/* eslint-disable max-len */
import operate from './operate';

const calculate = (data, btnName) => {
  const { total, next, operation } = data;

  switch (btnName) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (!total && !operation) {
        const newNext = next ? `${next}${btnName}` : btnName;
        return { total, next: newNext, operation };
      }
      if (total && operation) {
        const newNext = next ? `${next}${btnName}` : btnName;
        return { total, next: newNext, operation };
      }
      if (operation) {
        const newTotal = next;
        return { total: newTotal, next: btnName, operation };
      }
      break;
    case '+':
    case '-':
    case 'X':
    case '/': {
      const newOp = btnName;
      return { total, next, operation: newOp };
    }
    case '%': {
      const newOp = btnName;
      const newTotal = operate(next, 0, '%');
      return { total: newTotal, next: null, operation: newOp };
    }
    case '=': {
      if (!total) return { total, next, operation };
      const result = operate(total, next, operation);
      return { total: result, next: null, operation: null };
    }
    case '+/-':
      if (!next) return { total: (total * -1).toString(), next, operation };
      if (!total) return { total, next: (next * -1).toString(), operation };
      break;
    case 'C':
      return { total: null, next: null, operation: null };
    case '.':
      if (!next && !total) return { total, next: `${0}${btnName}`, operation };
      if (!next) return { total: `${total}${btnName}`, next, operation };
      if (!total) return { total, next: `${next}${btnName}`, operation };
      if (operation && total && (next !== '0' || next === '0')) return { total, next: `${next}${btnName}`, operation };
      break;
    default:
      return data;
  }
  return { total, next, operation };
};

export default calculate;
