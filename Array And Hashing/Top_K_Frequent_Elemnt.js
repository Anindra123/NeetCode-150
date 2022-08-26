//347. Top K Frequent Elements
//Given an integer array nums and an integer k,
//return the k most frequent elements. You may return the answer in any order.

//Clever solution is to use a bucket sort
// however the value indicies of the array of bucket sort will be the occurance of
// the number in the array and the value will be a list of the value
var topKFrequent = function (nums, k) {
  const hmap = new Map();
  const out = [];
  const arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (hmap.has(nums[i])) {
      hmap.get(nums[i]).push(nums[i]);
    } else {
      hmap.set(nums[i], [nums[i]]);
    }
  }

  for (const [key, val] of hmap.entries()) {
    if (arr[hmap.get(key).length] === undefined) {
      arr[hmap.get(key).length] = [key];
    } else {
      arr[hmap.get(key).length].push(key);
    }
  }
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] !== undefined) {
      arr[i].forEach((e) => {
        out.push(e);
        k--;
      });
    }

    if (k === 0) break;
  }
  return out;
};

// My solution O(nlogn) beacause sorting each of the hashmap entries

// var topKFrequent = function (nums, k) {
//   const hmap = new Map();
//   const out = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (hmap.has(nums[i])) {
//       hmap.get(nums[i]).push(nums[i]);
//     } else {
//       hmap.set(nums[i], [nums[i]]);
//     }
//   }
//   const n_map = new Map(
//     [...hmap.entries()].sort((a, b) => b[1].length - a[1].length)
//   );
//   for (const [key, val] of n_map.entries()) {
//     out.push(key);
//     k--;
//     if (k == 0) break;
//   }
//   return out;
// };

const nums = [4, 1, -1, 2, -1, 2, 3],
  k = 2;
topKFrequent(nums, k);
