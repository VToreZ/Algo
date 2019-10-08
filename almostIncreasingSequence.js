function almostIncreasingSequence(a) {
  let excessCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= a[i + 1]) {
      console.log('bad: ' + a[i]);
      excessCount += 1;
    }
    if (excessCount > 1) {
      return false;
    }
    if (a[i + 2] <= a[i] && a[i + 1] <= a[i - 1]) {
      return false;
    }
  }
  return true; 
}
// Проверка через одного

console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])); //false
console.log(almostIncreasingSequence([1, 2, 1, 2]));  // false
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6])); // true
