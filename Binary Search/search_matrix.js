/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//Better solution is to do a binary search of the m rows finding the row
// and the performing binary search of n column total time compelexity
// O(logm+logn) === O(logn)
var searchMatrix = function (matrix, target) {
  const [r, c] = [matrix.length, matrix[0].length];
  let [leftIdx, rightIdx] = [0, r * c - 1];

  while (leftIdx <= rightIdx) {
    const mid = Math.trunc((leftIdx + rightIdx) / 2);
    const [row, col] = [Math.floor(mid / c), mid % c];
    const num = matrix[row][col];

    if (num === target) return true;

    if (num > target) rightIdx = mid - 1;
    if (num < target) leftIdx = mid + 1;
  }

  return false;
};

//Going through each m row and doing a logn search total time complexity
// O(mlogn)
// var searchMatrix = function (matrix, target) {
//   for (m of matrix) {
//     if (binarySearch(0, m.length - 1, m, target)) {
//       return true;
//     }
//   }
//   return false;
// };

// const binarySearch = (l, r, m, t) => {
//   if (l > r) return false;

//   let mid = Math.abs(Math.ceil(l + r - 1 / 2));

//   if (m[mid] === t) return true;

//   if (m[mid] > t) {
//     r = mid - 1;
//   }

//   if (m[mid] < t) {
//     l = mid + 1;
//   }

//   return binarySearch(l, r, m, t);
// };

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

console.log(searchMatrix(matrix, target));
