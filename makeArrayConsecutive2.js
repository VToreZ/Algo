function makeArrayConsecutive2(s) {
  return Math.max(...s) - Math.min(...s) - s.length + 1;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
