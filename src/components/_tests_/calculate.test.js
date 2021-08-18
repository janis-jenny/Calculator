import calculate from '../../logic/calculate';

describe('Calculate', () => {
  let dataObject = {
    total: null,
    next: null,
    operation: null,
  };
  let btnName = null;

  describe('Normal Operations', () => {
    it('3 + 3 should return 6', () => {
      dataObject = { total: 3, next: 3, operation: '+' };
      btnName = '=';
      const result = calculate(dataObject, btnName);
      expect(result).toHaveProperty('total', '6');
    });

    it('7 - 3 should return 4', () => {
      dataObject = { total: 7, next: 3, operation: '-' };
      btnName = '=';
      const result = calculate(dataObject, btnName);
      expect(result).toHaveProperty('total', '4');
    });

    it('3 x 4 should return 12', () => {
      dataObject = { total: 3, next: 4, operation: 'X' };
      btnName = '=';
      const result = calculate(dataObject, btnName);
      expect(result).toHaveProperty('total', '12');
    });

    it('9 / 3 should return 3', () => {
      dataObject = { total: 9, next: 3, operation: '/' };
      btnName = '=';
      const result = calculate(dataObject, btnName);
      expect(result).toHaveProperty('total', '3');
    });
  });

  describe('Special operations', () => {
    it('5 +/- should return -5', () => {
      dataObject = { total: 5, next: null, operation: '+/-' };
      btnName = '+/-';
      const result = calculate(dataObject, btnName);
      expect(result).toHaveProperty('total', '-5');
    });

    it('Clicking C should reset everthing to null', () => {
      dataObject = { total: null, next: 10, operation: 'C' };
      btnName = 'C';
      const result = calculate(dataObject, btnName);
      expect(result).toEqual({ next: null, operation: null, total: null });
    });

    it('5 % should return 0.05', () => {
      dataObject = { total: null, next: 5, operation: '%' };
      btnName = '%';
      const result = calculate(dataObject, btnName);
      expect(result).toHaveProperty('total', '0.05');
    });

    it('Clicking on the "." button should return the number + "."', () => {
      dataObject = { total: '5', next: null, operation: null };
      btnName = '.';
      const result = calculate(dataObject, btnName);
      expect(result).toHaveProperty('total', '5.');
    });
  });
});
