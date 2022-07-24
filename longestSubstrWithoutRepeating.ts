/**
 * Passed 100% first try
 * O(n) time, O(m or n) space (this comment was suggested by copilot?)
 * Optimal solution
 * https://leetcode.com/problems/longest-substring-without-repeating-characters (this was also suggested...)
 */

function longestSubstringWithoutRepeatingChar(str) {
    let max = 0;
    let start = 0;
    let end = 0;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            start = Math.max(map.get(str[i]), start);
        }
        end = i;
        max = Math.max(max, end - start + 1);
        map.set(str[i], i + 1);
    }
    return max;
}