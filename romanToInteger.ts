// convert roman to integer (suggested off of "convert rom")

// ~2000 out of ~4000 tests passed, linter errors

function romanToInt(s: string): number {
  const map = new Map<string, number>();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && map.get(s[i]) > map.get(s[i - 1])) {
      sum -= map.get(s[i - 1]);
    }
    sum += map.get(s[i]);
  }
  return sum;
}

// convert roman numerals to integers
// https://leetcode.com/problems/roman-to-integer/
// https://leetcode.com/problems/roman-to-integer/discuss/2912/A-simple-solution-with-explanation
// ^ is this a bug with leetcode and copilot? This link is strange, it was suggested.


// even with exact function name and above suggested comments, it suggests this solution. Mark this as failed.
function romanToInt(s: string): number {
  const map = new Map<string, number>();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && map.get(s[i]) > map.get(s[i - 1])) {
      sum -= map.get(s[i - 1]);
    }
    sum += map.get(s[i]);
  }
  return sum;
}