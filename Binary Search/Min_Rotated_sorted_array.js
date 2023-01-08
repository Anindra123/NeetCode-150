/**
153. Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is 
 rotated between 1 and n times. For example,
  the array nums = [0,1,2,4,5,6,7] might become:

    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]]
 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, 
return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 */

// Funniest solution 😂😂😂
//O(n) time complexity
//  /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMin = function(nums) {
//     return Math.min(...nums);
// };

//optimal solution is use binary search
// since the array is sorted and rotated the left portion will be greater than
// the value of right portion
// and both left and right portion will be sorted in ascending
// trick is to check the condition
// let say m is the middle pointer , l and r are the left and right pointer
// if nums[m] >= nums[l]:
//      search to the right
// else
//      search to left
function sort(leftIdx, rightIdx, nums) {
  while (leftIdx < rightIdx) {
    let target = (leftIdx + rightIdx) >> 1;
    let targeNum = nums[target];

    let [leftNum, rightNum] = [nums[leftIdx], nums[rightIdx]];

    if (leftNum < rightNum) return leftNum;

    if (targeNum >= leftNum) leftIdx = target + 1;
    if (targeNum < leftNum) rightIdx = target;
  }
  return nums[leftIdx];
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  return sort(0, nums.length - 1, nums);
};

const arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(arr));
