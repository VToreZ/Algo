function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    let num = a[i];
    if (a[Math.abs(num) - 1] > 0) {
      a[Math.abs(num) - 1] = -1 * a[Math.abs(num) - 1];
    } else {
      return Math.abs(num);
    }
  }
  return -1;
}
console.log(firstDuplicate([3, 2, 7, 5, 2, 3, 4]));
