var findLatestWeight = function(weights, i = weights.length - 1) {
  const cur = weights.length - 1 === i;

  if (i === 0) return weights[0];

  if (weights[i] < weights[i - 1]) weights.sort((a, b) => a - b);
  weights[i - 1] = (weights[i] === weights[i-1]) ? 0 : weights[i] - weights[i-1];

  return findLatestWeight(weights, i - 1);
}

console.log(findLatestWeight([20,7,4,1,8,1]));
