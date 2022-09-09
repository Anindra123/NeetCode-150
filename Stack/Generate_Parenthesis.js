/**
 * @param {number} n
 * @return {string[]}
 */

//Basic brute force approach is to use backtracking and stack
// the constraint is that the number of close parenthesis added will be less than
// open parenthesis number
var generateParenthesis = function (n) {
  const stack = [];
  const out = [];
  function recursiveBackTrack(open, close) {
    if (open === n && close === n) {
      out.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      recursiveBackTrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      recursiveBackTrack(open, close + 1);
      stack.pop();
    }
  }

  recursiveBackTrack(0, 0);
  return out;
};

generateParenthesis(3);
