function sortByHeight(a) {
  let arr = a.filter(current => current > 0);
  arr.sort((a, b) => a - b);
  return a.map(current => current > 0 ? arr.shift() : -1);
}

console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
