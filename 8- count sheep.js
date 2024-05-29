const countSheep = (num) => {
  return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
};

// const countSheep = (num) => {
//   return Array.from({ length: 6 }).map((_,i) => 'a');
// };

console.log(countSheep(3));
