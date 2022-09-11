/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

//Keep a monotonically decreasing stack of the time of the cars to reach the
// destination , if there are cars on top of the stack that has lower time
// which means the cars intersect and combine to a single fleet so pop it from the
// stack
var carFleet = function (target, position, speed) {
  const stack = [];
  const cars = new Map();

  position.forEach((p, i) => cars.set(p, speed[i]));

  position.sort((a, b) => a - b);
  for (let p of position) {
    const s = cars.get(p);
    const time = (target - p) / s;

    while (stack.length && stack[stack.length - 1] <= time) stack.pop();

    stack.push(time);
  }

  return stack.length;

  //   if (position.length === 1 && speed.length === 1) return 1;
  //   const sortedCars = position
  //     .map((num, idx) => [num, speed[idx]])
  //     .sort((a, b) => a[0] - b[0]);

  //   for (let i = sortedCars.length - 1; i > -1; i--) {
  //     const p = sortedCars[i][0];
  //     const s = sortedCars[i][1];

  //     const time = (target - p) / s;
  //     stack.push(time);

  //     if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2])
  //       stack.pop();
  //   }

  //   return stack.length;
};

const target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));
