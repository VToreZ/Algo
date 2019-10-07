function strSort(str) {
  return str.toLowerCase().split("").sort().join("");
}


function isAnogram(a, b) {
  return strSort(a) == strSort(b);
}


console.log(isAnogram('фывфывыф', 'фывфывыфв'));
