//49. Group Anagrams
//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//An Anagram is a word or phrase formed by rearranging
//the letters of a different word or phrase,
//typically using all the original letters exactly once.

//Better solution is same as utilizing a hashmap
//however the key are is an array of the count of character
// time complexity O(m*n*26) or O(m*n) space complexity O(n)
// m is the size of the words array, n is the average number of character of a word
// 26 beacause there is 26 small letter which will be used as key

var groupAnagrams = function (strs) {
  const map = {};
  const out = [];
  const codes = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  const hasword = (word) => {
    const hash = new Array(26).fill(0);
    for (const ch of word) {
      ++hash[codes[ch]];
    }
    return hash.toString();
  };

  for (const s of strs) {
    const key = hasword(s);
    if (key in map) {
      map[key].push(s);
    } else {
      map[key] = [s];
    }
  }
  for (const g in map) {
    out.push(map[g]);
  }

  return out;
};

//My solution 158 ms runtime, O(m * nlogn) time complexity
// beacuse each word is sorted m time, where m is the
// length of array and sorting is nlogn times
//, space complexity O(n)
// Basic idea is to use a hashmap
//Slower because sorting each word

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs = ["ddddddddddg", "dgggggggggg"];
// var groupAnagrams = function (strs) {
//   const map = {};
//   const out = [];
//   //go over each of the words
//   for (let j = 0; j < strs.length; j++) {
//     //sort the words the sorted word will be used as key
//     let s = strs[j].split("").sort().join("");
//     // check whether the key exist in the hashmap
//     if (s in map) {
//       // since the other words if sorted there will be a key
//       // similar to it on the hashmap
//       // so check the key if it exist if it does
//       // push the unsorted word as value on the created array for that hashmap
//       //key
//       map[s].push(strs[j]);
//     } else {
//       // if not place the sorted word as key and
//       // the unsorted word as its value
//       map[s] = [strs[j]];
//     }
//   }
//   for (const key in map) {
//     const g = map[key];
//     out.push(g);
//   }
//   return out;
// };

groupAnagrams(strs);
