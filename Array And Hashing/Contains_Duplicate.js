//An efficient solution with O(n) runtime would be use of hashset
let containsDuplicate = function (nums) {
  //Set() removes the duplicate elements and
  //place the array at O(logn) time
  // so only need to check the length
  return new Set(nums).size !== nums.length;
};

//One solution is to sort the list and check the adjacent value

//My solution runtime O(n^2)
// let containsDuplicate = function(nums) {

//     for(let i=0;i<nums.length;i++){
//         let val = nums[i];
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[j] === val){
//                 return true;
//                 break;

//             }
//         }
//     }
//     return false;
// };
