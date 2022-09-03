const getSubstring = (s, start, end) => {
  if (end <= s.length) {
    return s.slice(start, start + end);
  } else {
    return "";
  }
};
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  let target = new Object(null);
  let min = t.length + 1;
  let l = 0;
  let r = l;
  let have = 0;
  let need = t.length;
  let start = 0;
  let end = s.length + 1;
  for (let i = 0; i < t.length; i++) {
    if (target.hasOwnProperty(t[i])) {
      target[t[i]]++;
    } else {
      target[t[i]] = 1;
    }
  }
  while (r < s.length) {
    if (target.hasOwnProperty(s[r])) {
      target[s[r]]--;
      if (0 <= target[s[r]]) {
        have++;
      }
    }

    while (have === need) {
      const window = r - l + 1;
      if (window < end) {
        [start, end] = [l, window];
      }
      if (target.hasOwnProperty(s[l])) {
        if (target[s[l]] === 0) {
          have--;
        }
        target[s[l]]++;
      }
      l++;
    }

    r++;
  }
  return getSubstring(s, start, end);
};

const s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
