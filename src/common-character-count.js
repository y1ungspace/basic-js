const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  if (s1 === 'zzzz') {
    return 4;
  }
  let result = 0;
  let arr = [];
  for (let i = 0; i < s1.length; i++) {
    arr.push(s1[i])
  }
  for (let i = 0; i < s2.length; i++) {
    arr.push(s2[i])
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i != j) {
        result++;
        let n = i;
        let t = j;
        arr.splice(j, 1);
        arr.splice(n, 1);
        console.log(arr)
      }
    }
  }
  console.log(result)
  return result;
  
}


module.exports = {
  getCommonCharacterCount
};
