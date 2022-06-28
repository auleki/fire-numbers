/**
 * Adds commas to value
 * @info list||find the constraints
 * @param {Number} value 
 * @returns {Number}
 */
function addCommas(value) {
  return parseFloat(value).toLocaleString('en-US');
}

module.exports = addCommas;