//1. Two Sum
/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.
*/

//A better solution is to check the difference between the number and check
//whether the difference exist in the hashmap
//time complexity O(n) space complexity O(n) due to use of extra hashmap

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    //check whether the difference between the target and current
    //number in the array exist in hashmap
    if (target - nums[i] in map) {
      //if yes return the indicies
      return [map[target - nums[i]], i];
    } else {
      //else place the current number as value and its index as key in map
      map[nums[i]] = i;
    }
  }
};

//My solution O(n^2) worst case time complexity
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };
