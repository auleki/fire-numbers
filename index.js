/**
 * Adds commas to value
 * @info list||find the constraints
 * @param {Number} value 
 * @returns {Number}
 */

// using toLocaleString we lose the decimal values
function addCommas(value) {
  return parseFloat(value).toLocaleString('en-US');
}

/**
 * Removes the commas and returns a number
 * @info list||find the constraints
 * @param {String} value 
 * @returns {Number}
 */
// when returning decimals if 4.50 ensure the "0" shows 
// (using toFixed(2) solves that)
function removeCommas(value) {
  return Number(value.split(",").join("")).toFixed(2);
}

console.log(removeCommas('577,854,912,452,000.45'));