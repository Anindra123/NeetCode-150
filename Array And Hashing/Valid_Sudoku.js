//36. Valid Sudoku

/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells 
need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 
without repetition.

Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

//A simple solution is just go through each row , each coloumn , each 3x3 box and
// use a hashset for each of the values which stores uniques values

//Time complexity O(9^2) or O(81) as the board is 9x9

var isValidSudoku = function (board) {
  const row = [];
  const col = [];
  const box = [];
  for (let i = 0; i < 9; i++) {
    row.push({});
    col.push({});
    box.push({});
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;

      let n = parseInt(board[r][c]);

      let box_idx = parseInt(r / 3) * 3 + parseInt(c / 3);
      //   let grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      row[r][n] = row[r][n] ? row[r][n] + 1 : 1;
      col[c][n] = col[c][n] ? col[c][n] + 1 : 1;
      box[box_idx][n] = box[box_idx][n] ? box[box_idx][n] + 1 : 1;

      if (row[r][n] > 1 || col[c][n] > 1 || box[box_idx][n] > 1) return false;
      //   if (!row[r]) row[r] = new Set();
      //   if (!col[c]) col[c] = new Set();
      //   if (!box[grid]) box[grid] = new Set();

      //   if (row[r].has(n) || col[c].has(n) || box[grid].has(n)) return false;
      //   row[r].add(n);
      //   col[c].add(n);
      //   box[grid].add(n);
    }
  }
  return true;
};

// var isValidSudoku = function (board) {
//   const row = {};
//   const col = {};
//   const box = {};

//   for (let r = 0; r < 9; r++) {
//     for (let c = 0; c < 9; c++) {
//       let n = board[r][c];

//       if (n === ".") continue;

//       let grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

//       if (!row[r]) row[r] = new Set();
//       if (!col[c]) col[c] = new Set();
//       if (!box[grid]) box[grid] = new Set();

//       if (row[r].has(n) || col[c].has(n) || box[grid].has(n)) return false;
//       row[r].add(n);
//       col[c].add(n);
//       box[grid].add(n);
//     }
//   }
//   return true;
// };

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
