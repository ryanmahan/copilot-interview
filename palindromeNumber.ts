// return true if the number is a palindrome
function palindrome(num: number): boolean {
  const str = num.toString();
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}