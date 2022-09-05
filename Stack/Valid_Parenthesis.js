/**
 * @param {string} s
 * @return {boolean}
 */

//Most basic stack problem push opening parenthesis if the corressponding closing
// parenthesis found at the top of the stack then pop if stack has values then return
// false else true
var isValid = function (s) {
  if (!s) return false;
  let closeParenMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in closeParenMap) {
      if (stack.length > 0 && stack[stack.length - 1] === closeParenMap[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
    // if (s[i] === ")" && stack[stack.length - 1] === "(") {
    //   stack.pop();
    // } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
    //   stack.pop();
    // } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
    //   stack.pop();
    // } else {
    //   stack.push(s[i]);
    // }
  }
  return stack.length === 0;
  //   if (stack.length === 0) return true;
  //   return false;
};

const s = "(())";
console.log(isValid(s));
