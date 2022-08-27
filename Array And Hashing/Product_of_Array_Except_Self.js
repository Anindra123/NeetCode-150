//238. Product of Array Except Self

/*
Given an integer array nums, return an array answer 
such that answer[i] is equal to the product of all the elements of 
nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time 
and without using the division operation.

*/

//Very clever and better solution is two use a forward pass and backward pass through
//the array
// Compute the prefix with forward pass and postfix with backward pass

var productExceptSelf = function (nums) {
  let pre = 1;
  let post = 1;
  const out = new Array(nums.length - 1);
  out[0] = pre;
  for (let i = 0; i < nums.length - 1; i++) {
    pre = pre * nums[i];
    if (pre === -0) pre = 0;
    out[i + 1] = pre;
  }
  for (let j = nums.length - 1; j > 0; j--) {
    post = post * nums[j];
    let num = out[j - 1] * post;
    if (num === -0) num = 0;
    out[j - 1] = num;
  }
  return out;
};

// My algorithm really bad out of memory exception
// var productExceptSelf = function (nums) {
//   const out = [];

//   let s = nums.length - 1;
//   let c = 0;
//   let num = 1;
//   let n = nums.shift();
//   nums.push(n);
//   while (c >= 0) {
//     if (c === s) {
//       if (num === -0) {
//         out.push(0);
//       } else {
//         out.push(num);
//       }
//       n = nums.shift();
//       nums.push(n);
//       c = 0;
//       num = 1;
//     }

//     num *= nums[c];

//     c++;
//     if (out.length === nums.length) {
//       break;
//     }
//   }
//   return out;
// };
let nums = [-1, 1];
productExceptSelf(nums);
