function reverseInParentheses(a) {
  let openCount = a.match(/\(/g) || [];
  for (let i = 0; i < openCount.length; i++) {
    for (var j = 0, symbols = 0, open = 0, close = 0; open != close || open < 1; j++) {
      if (a[j] == `(`) {
        open += 1;
      } else if (a[j] == `)`) {
        close += 1;
      }
      if (open + close) {
        symbols += 1;
      }
    }
    a = a.slice(0, j - symbols) + (a.split('').slice(j - symbols + 1, j - 1)).reverse().join('') + a.slice(j, a.length);
  }
  return a;
}
console.log([].length);
console.log(reverseInParentheses(""));
// console.log(reverseInParentheses(reverse("ada)123(s)dsaa(sabc")));
