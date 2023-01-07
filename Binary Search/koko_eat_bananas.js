//875. Koko Eating Bananas
/**
Koko loves to eat bananas. There are n piles of bananas, 
the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, 
she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas, she eats all of them instead 
and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants 
to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 */

/**
Since koko can eat piles of banana each hour, thus len(p) <= h
A brute force approach will be to start with k = 1 and incrementing it and 
check whether koko can eat all
the bananas at that rate by check the (pile/k) and summing
and find the minimum speed 
Time complexity will be O(max(p) * P)

Optimal solution is to use binary search 
make the time complexity 
O(log(max(p)) * p)

take two pointer left and right one on the minimum value and other on the maximum 
value
based on binary search principle at first we take the pile having the highest number
of bananas and take an array within the range of 1 to max of the bananas
take the middle value and set it as the current 
rate of eating bananas
then check whether the rate set allows koko to eat banana less than given hour
by doing (pile[i]/k) then summing the values if it is found it is a possible solution
we go left end to find a lower value
else the rate found isn't enough to eat all the bananas in the given hour so go right
and find the rate that gives  it
 */

function sort(leftIdx, rightIdx, piles, h) {
  //check if the left index and right index are in correct order or not equal
  if (leftIdx >= rightIdx) return rightIdx;
  //shortcut way of getting the mid value
  let m = (leftIdx + rightIdx) >> 1;

  let totalHour = 0;

  //calculate the total hour based on the current rate of eating bananas
  piles.forEach((p) => {
    totalHour += Math.ceil(p / m);
  });

  //check if the total hour to eat the bananas is less than the given hour
  //if it is then check to the left half of array for smaller value
  if (totalHour <= h) rightIdx = m;
  //if it is not then the rate needs to be increased by looking the right of the
  //array
  if (totalHour > h) leftIdx = m + 1;

  return sort(leftIdx, rightIdx, piles, h);
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  //shortcut way of creating array taking lowest value as 1 and largest
  //value of the highest number of bananas in piles
  let [l, r] = [1, Math.max(...piles)];
  let num = sort(l, r, piles, h);
  return num;
};

const piles = [312884470];
let h = 312884469;
console.log(minEatingSpeed(piles, h));
