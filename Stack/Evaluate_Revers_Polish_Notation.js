const arithmetic_notation = {
  "+": (l, r) => l + r,
  "-": (l, r) => l - r,
  "*": (l, r) => l * r,
  "/": (l, r) => Math.trunc(l / r),
};

/**
 * @param {string[]} tokens
 * @return {number}
 */

//Another simple stack problem
//since theres is no edge case push numbers in stack until a operator is found
// then when operator is found pop the two numbers one being right hand side and
// on being left hand side and compute the operation and push it in the stack again
var evalRPN = function (tokens) {
  let stack = [];
  for (const token of tokens) {
    if (token in arithmetic_notation) {
      let right = stack.pop();
      let left = stack.pop();
      stack.push(arithmetic_notation[token](left, right));
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};

const tokens = ["4", "13", "5", "/", "+"];

console.log(evalRPN(tokens));
