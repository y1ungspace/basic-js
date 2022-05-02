const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, {repeatTimes = 0, separator = '+', 
  addition = '', additionRepeatTimes = 0, additionSeparator = '|'}) {
  let additionResult = addition;
   for (let i = 0; i < additionRepeatTimes - 1; i++) {
     additionResult += additionSeparator + addition
 }
   let result = str + additionResult;
   for (let i = 0; i < repeatTimes - 1; i++) {
     result += separator + str + additionResult;
   }
   return result;
 }

module.exports = {
  repeater
};
