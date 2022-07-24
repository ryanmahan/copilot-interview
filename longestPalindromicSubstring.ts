// write a function that takes in a string s and returns the longest palindromic substring
// function longestPalindromicSubstring(s: string): string {
//   let longest = '';
//   for (let i = 0; i < s.length; i++) {
//     let odd = longestPalindromicSubstringHelper(s, i, i);
//     let even = longestPalindromicSubstringHelper(s, i, i + 1);
//     longest = odd.length > even.length ? odd : even;
//   }
//   return longest;
// }

// function longestPalindromicSubstringHelper(s: string, left: number, right: number): string {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return s.slice(left + 1, right);
// }

// Given a string s, return the longest palindromic substring in s.
// A palindromic substring is a substring of s that is the same backwards as forwards.
// For example, the longest palindromic substring of "abcba" is "bcb".
function longestPalindromicSubstring(s: string): string {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let odd = longestPalindromicSubstringHelper(s, i, i);
    let even = longestPalindromicSubstringHelper(s, i, i + 1);
    longest = odd.length > even.length ? odd : even;
  }
  return longest;
}

// nope, keeps suggesting the same incorrect answer