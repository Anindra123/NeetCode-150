/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//A linear time solution is to use a monotonically decreasing stack
//  check the current temperature if it is smaller than push it onto
// the stack else if the current temperature is bigger than the top of
// stack pop it and push the difference of indicies in output array

var dailyTemperatures = function (temperatures) {
  const out = new Array(temperatures.length).fill(0);

  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length !== 0 &&
      stack[stack.length - 1][0] <= temperatures[i]
    ) {
      const [temp, idx] = stack.pop();
      out[idx] = i - idx;
    }
    stack.push([temperatures[i], i]);
  }
  return out;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));
