/**
 * @param {number[]} height
 * @return {number}
 */

//Optimal solution with O(n) time complexity is to use two pointer
// use a left pointer and right pointer if the height of right is lower then left
// shift right and vice versa and computer the maximum length

var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let h = height[l] > height[r] ? height[r] : height[l];
  let w = r - l;

  let max = h * w;
  while (l < r) {
    if (height[l] <= height[r]) {
      l++;
      h = height[l] > height[r] ? height[r] : height[l];
      w = r - l;
      let currMax = h * w;
      if (currMax > max) max = currMax;
    }
    if (height[r] < height[l]) {
      r--;
      h = height[l] > height[r] ? height[r] : height[l];
      w = r - l;
      let currMax = h * w;
      if (currMax > max) max = currMax;
    }
  }

  return max;
};

//A brute force approach is to take the each height and then check each possible
// height and width after that height and  calculate the area
//where the left height if it is less than right then it is taken
// as bottle neck
// time complexity O(n^2)
// var maxArea = function (height) {
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let h = height[i] > height[j] ? height[j] : height[i];
//       let w = j - i;
//       let currMax = w * h;
//       if (currMax > max) max = currMax;
//     }
//   }

//   return max;
// };

const height = [1, 1];

console.log(maxArea(height));
