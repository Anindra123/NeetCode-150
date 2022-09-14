/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return sort(0, nums.length - 1, target, nums);
};

function sort(leftIdx, rightIdx, target, nums) {
  if (leftIdx > rightIdx) return -1;

  let m = Math.abs(Math.ceil(leftIdx + rightIdx - 1 / 2));

  if (nums[m] === target) return m;

  if (nums[m] > target) {
    rightIdx = m - 1;
  }
  if (nums[m] < target) {
    leftIdx = m + 1;
  }

  return sort(leftIdx, rightIdx, target, nums);
}
const nums = [-1, 0, 1, 2, 3, 4, 5, 7],
  target = 3;

search(nums, target);
