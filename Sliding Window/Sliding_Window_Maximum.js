/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//Use a monotincally decreasing queue for getting the maximum value of
// the window for an O(n) solution
function node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

function Deque() {
  this.left = null;
  this.right = null;
  this.size = 0;
  this.pushRight = function (value) {
    const n = new node(value);
    if (this.size === 0) {
      this.left = n;
      this.right = n;
    } else {
      this.right.next = n;
      n.prev = this.right;
      this.right = n;
    }
    this.size++;
    return this.size;
  };
  this.popRight = function () {
    if (!this.size) return null;
    const rNode = this.right;
    this.right = this.right.prev;
    if (this.right) this.right.next = null;
    this.size--;
    return rNode;
  };
  this.pushLeft = function (value) {
    const n = new node(value);
    if (this.size === 0) {
      this.left = n;
      this.right = n;
    } else {
      this.left.prev = n;
      n.next = this.left;
      this.left = n;
    }
    this.size++;
    return size;
  };
  this.popLeft = function () {
    if (!this.size) return null;

    const lNode = this.left;
    this.left = this.left.next;
    if (this.left) this.left.prev = null;
    this.size--;
    return lNode;
  };
}

var maxSlidingWindow = function (nums, k) {
  const out = [];
  let deq = new Deque();
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    // deq = addRight(nums, deq, r);
    // shiftRight(deq, l);
    // if (r + 1 >= k) {
    //   out.push(nums[deq[0]]);
    //   l++;
    // }
    // r++;

    while (deq.right && nums[deq.right.value] < nums[r]) deq.popRight();
    deq.pushRight(r);

    if (l > deq.left.value) deq.popLeft();

    if (r + 1 >= k) {
      out.push(nums[deq.left.value]);
      l++;
    }
    r++;
  }
  return out;
};

// const shiftRight = (deq, left) => {
//   if (left > deq[0]) {
//     deq.shift();
//   }
//   return deq;
// };

// const addRight = (nums, deq, right) => {
//   while (
//     deq[deq.length - 1] !== undefined &&
//     nums[deq[deq.length - 1]] < nums[right]
//   )
//     deq.pop();
//   deq.push(right);
//   return deq;
// };

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
