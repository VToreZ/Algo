function charSet(s) {
  let set = new Set;
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }
  return set;
}
function commonCharacterCount(s1, s2) {
  let arr2 = s2.split('');
  for (var i = 0, counter = 0, currentIndex = 0; i < s1.length; i++) {
    // currentIndex = arr2('').indexOf(s1[i]);
    if (arr2.indexOf(s1[i]) >= 0) {
      counter += 1;
      arr2.splice(arr2.indexOf(s1[i]), 1);
    }
  }
  return counter;
}

console.log(commonCharacterCount("aabccd", "aaacd"));
