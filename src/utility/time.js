
/**
 * @param {*} year
 * @description a year is only a leap year if and only if:
 * 1. number must be divisible by 4
 * 2. if (1) is true and number is also divisible by 100, then it must also be divisble by 400
 * @returns {boolean} true if it is a leap year.
 */
function isLeap(year) {
  if(year % 4 == 0) {
    if(year % 100 == 0)
      return year % 400 === 0;
    return true;
  }
  return false;
}


/**
 * @param {*} date Any valid date string.
 * @returns number of years since that day. We are account for leap year so that 
 * my birthday does not come early lol.
 */

export default function calculateYears(date) {
    try {
      const now = new Date();
      const then = new Date(date);
      let ms = now.getTime() - then.getTime();
      let extraDays = 0;
      for(let i = then.getFullYear(); i < now.getFullYear(); i++) {
        if(isLeap(i)) {
          extraDays++;
        }
      }
      ms -= (1000*60*60*24)*extraDays;
      const years = ms/(1000*60*60*24*365);
      return years;
    } catch(error) {
      return 0
    }
  }