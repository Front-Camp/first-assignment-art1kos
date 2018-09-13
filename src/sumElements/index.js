/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
function sumElements() {
  return Array.from(arguments).reduce((sum, value) => {
 
    if (Array.isArray(value)) {
      
      sum += sumElements.apply(this, value)
    } else {
      sum += Number(value)
    }

    return sum
  }, 0)
};

export default sumElements;
