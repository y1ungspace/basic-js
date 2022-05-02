const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string'){
} else {
  newArray.push(array[i])
}
  }
  let result = '';
  newArray.sort()
  newArray[i].trim();
  newArray[i].toUpperCase();
  for (let i = 0; i < newArray.length; i++) {
    result += newArray[i][0];
  }
  if (result === '') {
    return false
  } else {
    return result
  }
}

module.exports = {
  createDreamTeam
};
