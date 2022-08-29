/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  if (numbers.length === 2) return [1, 2];

  let l = 0;
  let r = numbers.length - 1;

  while (true) {
    let sum = numbers[l] + numbers[r];
    //Array is sorted
    // if its greater we want to decrease it
    if (sum > target) r--;

    //if its smaller we want to increase it
    if (sum < target) l++;

    if (sum === target) break;
  }

  return [l + 1, r + 1];
};
//This solution works time complexity O(n) space O(1) however i made the logic two
// complex
// var twoSum = function (numbers, target) {
//   if (numbers.length === 2) return [1, 2];

//   let l = 0;
//   let r = numbers.length - 1;
//   while (true) {
//     while (numbers[r] > target) {
//       if (numbers[r] + numbers[l] === target) break;
//       r--;
//     }

//     while (target - numbers[r] < numbers[l]) {
//       if (numbers[r] + numbers[l] === target) break;
//       r--;
//     }

//     while (target - numbers[r] > numbers[l]) {
//       if (numbers[r] + numbers[l] === target) break;
//       l++;
//     }
//     if (numbers[r] + numbers[l] === target) break;
//   }
//   return [l + 1, r + 1];
// };

const numbers = [
    12, 13, 23, 28, 43, 44, 59, 60, 61, 68, 70, 86, 88, 92, 124, 125, 136, 168,
    173, 173, 180, 199, 212, 221, 227, 230, 277, 282, 306, 314, 316, 321, 325,
    328, 336, 337, 363, 365, 368, 370, 370, 371, 375, 384, 387, 394, 400, 404,
    414, 422, 422, 427, 430, 435, 457, 493, 506, 527, 531, 538, 541, 546, 568,
    583, 585, 587, 650, 652, 677, 691, 730, 737, 740, 751, 755, 764, 778, 783,
    785, 789, 794, 803, 809, 815, 847, 858, 863, 863, 874, 887, 896, 916, 920,
    926, 927, 930, 933, 957, 981, 997,
  ],
  target = 542;
console.log(twoSum(numbers, target));
