/**
 * @param {number[]} prices
 * @return {number}
 */

//Optimal solution is to take two pointer which are side by side
// the left pointer will be the buying day and right will be selling day
//as long as the selling day price is lower than buying day price increment the
// right pointer for getting the maxprofit else shift both left and right pointer
// time complexity O(n) space O(1)
var maxProfit = function (prices) {
  let mProfit = 0;
  let l = 0;
  let r = l + 1;
  while (r < prices.length) {
    if (prices[l] >= prices[r]) l = r;
    console.log("l:", l);
    console.log("r:", r);
    let p = prices[r] - prices[l];
    if (p > mProfit) {
      mProfit = p;
    }
    r++;
  }
  return mProfit;
};

//This solution doesn't work thought i would just calculate the minimum selling data
// compute the maximum profit after that day
// however the maximum profit can come before buying that day
// var maxProfit = function (prices) {
//   let buyDay = 0;
//   let min = Number.MAX_VALUE;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min) {
//       buyDay = i + 1;
//       min = prices[i];
//     }
//   }
//   let sellDay = 0;
//   let profit = 0;
//   if (prices.length - 1 === buyDay - 1) return 0;
//   let j = buyDay - 1;
//   for (let i = j + 1; i < prices.length; i++) {
//     if (prices[i] - prices[j] > profit) {
//       profit = prices[i] - prices[j];
//     }
//   }
//   return profit;
// };

const prices = [2, 1, 2, 1, 0, 1, 2];

console.log(maxProfit(prices));
