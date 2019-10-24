var findLatestWeight = function(weights) {
  weights.sort((a, b) => a - b);
  while (weights.length > 1) {
    console.log(weights);
    weights[weights.length - 2] = (weights[weights.length - 1] === weights[weights.length - 2] ? 0 : weights[weights.length - 1] - weights[weights.length - 2]);
    weights.pop();
  }
  return weights[0];
}

console.log(findLatestWeight([20,7,4,1,8,1]));
//console.error();
