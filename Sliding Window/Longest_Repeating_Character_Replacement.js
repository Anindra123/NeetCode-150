/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//Easy solution is O(26 * n)
// basic idea is to check whether the current window is valid
// take a left and right pointer keep the count of each of the character
// after sliding the right pointer , then take the highest count of character
// subtract it from the current window length and check if it satisfies <=k
// if it satisfies k then its a valid window else increment left pointer and
// decrease the count of the character

var characterReplacement = function (s, k) {
  const map = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  };
  let res = 0;
  let l = 0;
  let r = 0;
  while (r < s.length) {
    map[s[r]]++;
    let max = checkMap(map);
    let len = r - l + 1;
    let val = len - max <= k;
    if (val) {
      res = len;
    } else {
      map[s[l]]--;
      l++;
    }
    len = r - l + 1;
    if (len > res) res = len;
    r++;
  }
  return res;
};

const checkMap = (map) => {
  let max = 0;
  for (const c in map) {
    if (map[c] > max) max = map[c];
  }
  return max;
};

const s = "ABAB",
  k = 2;
console.log(characterReplacement(s, k));
