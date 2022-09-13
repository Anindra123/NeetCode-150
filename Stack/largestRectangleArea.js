/**
 * @param {number[]} heights
 * @return {number}
 */

//keep a monotonically increasing stack , the largest area will be calculated
// from one coming top most , if the top most histogram bar cannot be extended or
// a smaller histogram bar comes after that then pop it calculate the area that
// it couldve produced and keep track of the max area and also the index of
// previous histogram rectangle popped since we can extend the smaller histogram
// rectangle backwards

var largestRectangleArea = function (heights) {
  let maxArea = 0;

  const stack = [];

  for (let i = 0; i < heights.length; i++) {
    let index = i;
    while (stack.length !== 0 && stack[stack.length - 1][1] > heights[i]) {
      const [idx, h] = stack.pop();
      const w = i - idx;
      const a = h * w;
      if (a > maxArea) maxArea = a;
      index = idx;
    }
    stack.push([index, heights[i]]);
  }

  while (stack.length !== 0) {
    const [idx, h] = stack.pop();
    const w = heights.length - idx;
    const a = h * w;
    if (a > maxArea) maxArea = a;
  }

  return maxArea;
};

const heights = [2, 1, 2];

console.log(largestRectangleArea(heights));
