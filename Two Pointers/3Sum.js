/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, sums = []) {
  const out = [];
  const s_num = nums.sort((a, b) => a - b);
  for (let i = 0; i < s_num.length - 2; i++) {
    if (checkPrev(s_num, i)) continue;

    let l = i + 1;
    let r = s_num.length - 1;
    let target = -s_num[i];

    while (l < r) {
      let sum = s_num[l] + s_num[r];

      if (sum === target) {
        out.push([s_num[l], s_num[r], -target]);
        l++;
        r--;
        while (l < r && checkPrev(s_num, l)) l++;
        while (l < r && checkNext(s_num, r)) r--;
        continue;
      }

      if (sum < target) l++;
      if (sum > target) r--;
    }
  }
  return out;
};
const checkPrev = (n, i) => n[i - 1] === n[i];
const checkNext = (n, i) => n[i] === n[i + 1];

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
