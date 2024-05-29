const countBy = (x, n) => {
  return [...Array(n)].map((_, i) => x * (i + 1));
};

console.log(countBy(3, 3));
