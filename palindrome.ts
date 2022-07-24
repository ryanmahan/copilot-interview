// return true if you can make a palindrome by removing one letter
function canMakePalindrome(s: string): boolean {
  const n = s.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + s[i];
  }
  return Math.max(...dp) <= 1;
}

// looks like a solution to another problem, lets try again

/**
 * @param {string} s: a string we want to turn into a palindrome
 * @return {boolean} if s is a palindrome or can be one by removing one letter
 */
function palindromeRemoveOneLetter(s: string) {
  const n = s.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + s[i];
  }
  return Math.max(...dp) <= 1;
}

// continues to suggest the same solution

// valid palindrome II
function validPalindrome(s: string): boolean {
  const n = s.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + s[i];
  }
  return Math.max(...dp) <= 1;
}

// not quite. lets mark this as failed