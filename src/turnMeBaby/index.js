/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
	if(isNaN(str)){
  		return str.split("").reverse().join("");
  		console.log(str);
  	}else{
    console.log("This is not a string")
  	}
	
};

export default turnMeBaby;
