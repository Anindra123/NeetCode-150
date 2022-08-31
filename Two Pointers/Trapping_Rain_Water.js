/**
 * @param {number[]} height
 * @return {number}
 */

//O(1) space complexity solution
// take two pointers left and right one at beginning one at end of array
// the if left pointer value is less than or equal to right shift the left pointer
// and vice versa
// this works since we are taking the minimum of maxleft and maxright height
// so even if the max right value is really big like 10 it doesn't matter cause
// if the maxleft value is smaller then we shift the pointer
var trap = function (height) {
  let maxL = height[0];
  let maxR = height[height.length - 1];
  let l = 0;
  let r = height.length - 1;
  let out = 0;
  while (l < r) {
    if (maxL <= maxR) {
      l++;
      let h = maxL - height[l];
      if (h > 0) out += h;
      if (height[l] > maxL) maxL = height[l];
    }
    if (maxR < maxL) {
      r--;
      let h = maxR - height[r];
      if (h > 0) out += h;
      if (height[l] > maxR) maxR = height[r];
    }
  }
  return out;
};
//Main idea is to check the current height left max height and right max height
// taking the minimum of those height and subtracting it from current height
// and check if it is greater than negative then add the unit of rain water
// else the rain water cannot be trapped in that position
// O(n) space complexity solution below with O(n) time complexity
// var trap = function (height) {
//   const maxL = new Array(height.length).fill(0);
//   const maxR = new Array(height.length).fill(0);
//   const minLR = [];
//   let out = 0;
//   let max = 0;
//   for (let i = 1; i < height.length; i++) {
//     if (height[i - 1] > max) max = height[i - 1];
//     maxL[i] = max;
//   }
//   max = 0;
//   for (let i = height.length - 2; i >= 0; i--) {
//     if (height[i + 1] > max) max = height[i + 1];
//     maxR[i] = max;
//   }

//   for (let i = 0; i < maxL.length; i++) {
//     minLR.push(Math.min(maxL[i], maxR[i]));
//   }
//   console.log(minLR);
//   for (let i = 0; i < minLR.length; i++) {
//     let h = minLR[i] - height[i];
//     if (h > 0) {
//       out += h;
//     }
//   }

//   return out;
// };

const height = [4, 2, 0, 3, 2, 5];

console.log(trap(height));
