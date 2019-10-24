function bem(str) {
  let regexp = /[^a-z]+/gi;
  let set = new Set();
  let values = [];
  str.match(regexp).forEach(current => set.add(current));
  // console.log(str.match(regexp));
  for (let value of set) {
    values.push(value);
  }
  if (str.match(regexp).filter(current => current === str.match(regexp)[2]).length > 1) {
    return ({
    mod: `${str.match(regexp)[1]}`, // разделитель для модификатора
    elem: `${str.match(regexp)[0]}`, // разделитель для элемента
});
} else if (str.match(regexp).filter(current => current === str.match(regexp)[1]).length > 1) {
    return ({
    mod: `${str.match(regexp)[0]}`, // разделитель для модификатора
    elem: `${str.match(regexp)[str.match(regexp).length - 1]}`, // разделитель для элемента
  });
} else if (str.match(regexp).filter(current => current === str.match(regexp)[1]).length == 1) {
    return ({
    mod: `${str.match(regexp)[0]}`, // разделитель для модификатора
    elem: `${str.match(regexp)[str.match(regexp).length - 1]}`, // разделитель для элемента
  });
}
}

console.log(bem(`block_mod__elem`));
console.log(bem(`block_mod_mod__elem`));
console.log(bem(`block__elem_mod_mod`));
