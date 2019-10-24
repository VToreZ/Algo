var findLatestWeight = function findLatestWeight(weights, i = weights.length - 1) {
  weights.sort((a, b) => Math.abs(a) - Math.abs(b));
  console.log(weights);
  for (var i = weights.length - 1, a = 0, b = 0; i >= 0; i--) {
    if (weights[i] > 0) {
      if (a < b) {
          b = b - a;
          a = 0;
          a += weights[i];

      } else {
          a = a - b;
          b = 0;
          b += weights[i];
      }
    } else {
      if (a > b) {
          a += weights[i];

      } else {
          b += weights[i];
      }
    }
  }
  return Math.abs(a - b);
}
module.exports = findLatestWeight;

console.log(findLatestWeight([-10, 3, 4, 5, 10]));
