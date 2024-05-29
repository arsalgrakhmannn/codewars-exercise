const repeats = (arr) => {
  return arr
    .filter((el) => arr.indexOf(el) == arr.lastIndexOf(el))
    .reduce((a, b) => a + b);
};

console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));
