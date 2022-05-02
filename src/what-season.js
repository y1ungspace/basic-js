const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date = undefined) {
  if(date === undefined) {
    return ('Unable to determine the time of year!');
} else if (date.getMonth === undefined) {
    throw new Error('Invalid date!');
 } else {
   let result = date.getMonth();
   let currentSeason = '';
   switch(result) {
     case 11:
     case 0:
     case 1:
       currentSeason = 'winter';
       break;
     case 2:
     case 3:
     case 4:
       currentSeason = 'spring';
       break;
     case 5:
     case 6:
     case 7:
       currentSeason = 'summer';
       break;
     case 8:
     case 9:
     case 10:
       currentSeason = 'autumn';
       break;
     default: 
        currentSeason = Error("Invalid date!")
   } 
   return currentSeason
 }
 }

module.exports = {
  getSeason
};
