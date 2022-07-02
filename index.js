/**
 * Adds commas to value
 * @info list || find the constraints
 * @param {Number} value 
 * @returns {Number} number
 */
module.exports.addCommas = (value) => {
  return parseFloat(value).toLocaleString('en-US');
};

/**
 * Removes the commas and returns a number
 * @info list || find the constraints
 * @param {String} value 
 * @returns {Number}
 */
module.exports.removeCommas = (value) => {
  return Number(value.split(",").join("")).toFixed(2);
};
