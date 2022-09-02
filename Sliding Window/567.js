//567. Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//O(n) solution basically we have to find whether the anagram of string exist as a
// substring in the other string

//Keep two hashmap one with original string character count the other to keep track
// of the character of the
// string that has the anagram for the O(n) solution
// during checking the window the hashmap values are check such that the total is
// 26 if yes return true if not return false
var checkInclusion = function (s1, s2) {
  const s1Count = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  const s2Count = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  if (s2.length < s1.length) return false;
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i]]++;
  }
  let l = 0;
  let r = l;
  while (r < s2.length) {
    s2Count[s2[r]]++;

    let window = r - l + 1;

    let hasPerm = window === s1.length && checkPermutation(s1Count, s2Count);
    if (hasPerm) return true;

    if (s1.length <= window) {
      s2Count[s2[l]]--;
      l++;
    }
    r++;
  }
  return false;
};

const checkPermutation = (s1Map, s2Map) => {
  for (const c in s1Map) {
    if (s1Map[c] !== s2Map[c]) return false;
  }
  return true;
};

const s1 = "savib",
  s2 = "fasfafbivasfasfasf";
console.log(checkInclusion(s1, s2));
