/**
 * @param {string} s
 * @return {boolean}
 */

//Better solution without extra string is two use a left pointer and a right pointer
// if character is found that is not alphanumeric increment left or decrement right
// if character doesn't match it is not palindrome return false
// else continue untile l === r or l>r
//O(1) space complexity
const checkAlphaNumeric = (c) => {
  if ((c >= "0" && c <= "9") || (c >= "a" && c <= "z")) return true;
  return false;
};

var isPalindrome = function (s) {
  if (s === " ") return true;
  let str = s.toLowerCase();
  let l = 0;
  let r = str.length;
  while (l < r) {
    while (l < r && !checkAlphaNumeric(str[l])) l++;
    while (l < r && !checkAlphaNumeric(str[r])) r--;
    if (str[l] !== str[r]) return false;

    l++;
    r--;
  }
  return true;
};

//My solution O(n) time complexity but needs extra memory for another string
// var isPalindrome = function (s) {
//   let str = s.trim().toLowerCase();
//   let str_n = "";
//   for (let i = 0; i < str.length; i++) {
//     if ((str[i] >= "0" && str[i] <= "9") || (str[i] >= "a" && str[i] <= "z")) {
//       str_n += str[i];
//     }
//   }
//   if (str_n === str_n.split("").reverse().join("")) {
//     return true;
//   }
//   return false;
// };
const s = "race a car";

console.log(isPalindrome(s));
