/**
 * Removes the commas and returns a number
 * @info list||find the constraints
 * @param {String} value 
 * @returns {Number}
 */
function removeCommas(value) {
  return Number(value.split(",").join("")).toFixed(2);
}

module.exports = removeCommas;