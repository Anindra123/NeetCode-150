//128. Longest Consecutive Sequence
//Given an unsorted array of integers nums,
//return the length of the longest consecutive elements sequence.

//You must write an algorithm that runs in O(n) time.

//Better solution is to think the solution as a range of sequence and count
// how long the sequence is
// Convert the array to Set() or hashmap
// go through the array check if the number has previous neighbour
// if yes than that is not the inital and it is other number in the set
// if the number is initial check if it has next neighbour
// if yes add it to sequence and increase the size of the sequence
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const s = new Set(nums);
  let max = 0;
  let len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i] - 1)) {
      continue;
    }

    let cMax = 1;
    while (s.has(nums[i] + cMax)) {
      cMax++;
    }

    if (cMax > max) max = cMax;

    if (max > len / 2) break;
  }

  return max;
};

//Thought i would use a counting sort algorithm and just
//go through the longest count
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;

//   let max = Math.max.apply(Math, nums);
//   let min = Math.min.apply(Math, nums);
//   let range = max - min + 1;

//   const count = Array.from({ length: range }, (_, i) => 0);
//   const output = Array.from({ length: nums.length }, (_, i) => 0);
//   let out = 1;
//   const seq_count = [];
//   for (let i = 0; i < nums.length; i++) {
//     count[nums[i] - min]++;
//   }
//   for (let i = 1; i < count.length; i++) {
//     count[i] += count[i - 1];
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     output[count[nums[i] - min] - 1] = nums[i];
//     count[nums[i] - min]--;
//   }
//   const s = new Set(output);
//   const out_arr = Array.from(s);
//   for (i = 0; i < out_arr.length; i++) {
//     if (Math.abs(out_arr[i + 1] - out_arr[i]) === 1) {
//       out++;
//     } else {
//       seq_count.push(out);
//       out = 1;
//     }
//   }
//   return Math.max.apply(Math, seq_count);
// };

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
