// takes a non-negative number and converts it to an English string
function englishToWords(num: number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];
  const result = [];
  let i = 0;
  while (num > 0) {
    const remainder = num % 1000;
    if (remainder > 0) {
      const word = englishToWords(remainder);
      if (word !== '') {
        result.push(word);
      }
      result.push(thousands[i]);
    }
    num = Math.floor(num / 1000);
    i++;
  }
  return result.reverse().join(' ');
}

// well this doesnt work, it loops infinitely, only checking for remainders of 1000
