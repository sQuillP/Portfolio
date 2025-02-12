


/**
 * @param {*} date Any valid date string.
 * @returns number of years since that day
 */
export default function calculateYears(date) {
    try {
  
      const ms = Date.now() - new Date(date).getTime();
      console.log(ms)
  
      return ms/(1000*60*60*24*365);
  
    } catch(error) {
      return 0
    }
  }