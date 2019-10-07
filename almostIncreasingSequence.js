function almostIncreasingSequence(sequence) {
  let excessCount = 0;
  for (let i = 0; i < sequence.length; i++) {
    if ((sequence[i] <= Math.max(...sequence.slice(0, i))) || (sequence[i] >= Math.max(...sequence.slice(i, sequence.length)))) {
      excessCount += 1;
      sequence.splice(i, 1);
      console.log(sequence);
      i--;
    }
  }
  return excessCount <= 1;
}

console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
