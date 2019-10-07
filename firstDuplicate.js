function firstDuplicate(a) {
  let arr = new Array(a.length).fill(0);
    for (let i = 0; i  < a.length; i++) {
      if (a.includes(-a[i])) {
        return a[i];
      }
      a[i] = -a[i];
      console.log(a);
    }
    return -1;
}
console.log(firstDuplicate([3, 2, 9, 5, 2, 3, 4]));
console.log(seen[3]);
