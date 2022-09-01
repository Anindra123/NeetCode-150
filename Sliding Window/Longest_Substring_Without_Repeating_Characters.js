/**
 * @param {string} s
 * @return {number}
 */

// Use the sliding window technique
// as long as the there is no repeating characters decrease the size of the window
// if there is repeating character pop character from the top of the window
// keep track of the longest length
//Time complexity O(n) space complexity O(n)
var lengthOfLongestSubstring = function (s) {
  let window = new Set();
  let maxLen = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    while (window.has(s[r])) {
      window.delete(s[l]);
      l++;
    }
    window.add(s[r]);
    maxLen = Math.max(maxLen, window.size);
  }
  return maxLen;
};

const s = "pwwkew";
console.log(lengthOfLongestSubstring(s));
