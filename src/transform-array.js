const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(oldArr) {
  let arr = oldArr;
  if (typeof arr !== 'object' || arr === null || arr.toString() === "[object Object]") {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--double-next') {
    arr[i] = arr[i + 1];
  } else if (arr[i] === '--discard-prev') {
    arr.splice(i - 1, i - 3)
} else if (arr[i] === '--double-prev') {
    arr[i] = arr[i - 1];
} else if (arr[i] === '--discard-next') {
   arr.splice(i + 1, i - 2)
}
}
let result = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--double-next' || arr[i] === "--discard-prev" || arr[i] === '--double-prev' || arr[i] === '--discard-next' || arr[i] === undefined) {
} else {
  result.push(arr[i])
}
}
return result;
}

module.exports = {
  transform
};
