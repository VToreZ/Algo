function allLongestStrings(a) {
  let len = a[0].length;
  var maxLen = a.reduce((max, current) => Math.max(current.length, max), 0);
  console.log(maxLen);
  for (var i = 0, arr = []; i < a.length; i++) {
    if (a[i].length == maxLen) {
      arr.push(a[i]);
    }
  }
  return arr;
}

console.log(allLongestStrings(["aba", "av", "ac", "vgc"]));
