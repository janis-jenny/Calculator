const calculate = (data, btnName) => {
  // eslint-disable-next-line no-console
  console.log(data);
  const { total, next, operation } = data;

  // Multiply by -1, the lastly typed number
  if (btnName === '+/-') {
    if (!next) return { total: (total * -1).toString(), next, operation };
    if (!total) return { total, next: (next * -1).toString(), operation };
  }

  // Add a dot at the end of the recently typed number
  if (btnName === '.') {
    if (!next && !total) return { total, next: `${0}${btnName}`, operation };
    if (!next) return { total: `${total}${btnName}`, next, operation };
    if (!total) return { total, next: `${next}${btnName}`, operation };
    if (operation && total && (next !== '0' || next === '0')) return { total, next: `${next}${btnName}`, operation };
  }

  // Reset all values if AC is clicked or the result/total is an error
  if (btnName === 'AC' || total === 'Error') {
    return { total: null, next: null, operation: null };
  }
  return { total, next, operation };
};

export default calculate;
