function isLucky(n) {
  n = ("" + n).split('');
  return n.slice(0, n.length / 2).reduce((sum, current) => +current + +sum) ==
  n.slice(n.length / 2, n.length).reduce((sum, current) => +current + +sum);
}
console.log(isLucky(23901700000000000000000000000000));
console.log(isLucky(2220000000006));
