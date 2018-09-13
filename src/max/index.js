/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  	let largest = 0;
    let a = arr.length;
    for (counter=0;counter<a;counter++)
    {
        if (arr[counter] > largest)
        {
            largest = arr[counter];
        }
    }
    return largest;
};

export default max;
