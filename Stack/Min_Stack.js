//The trick to getting constant time min value is to keep two stack
// one stack for regular push pop and top operation other stack for
// keeping track of corresponding minimum of the current node of the stack
class MinStack {
  /**
   * @constructor
   */

  constructor() {
    this.stack = [];
    this.minstack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (!this.minstack.length || val <= this.minstack[this.minstack.length - 1])
      this.minstack.push(val);
  }
  /**
   * @return {void}
   */
  pop() {
    let val = this.stack.pop();
    if (val === this.minstack[this.minstack.length - 1]) {
      this.minstack.pop();
    }
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minstack[this.minstack.length - 1];
  }
}
