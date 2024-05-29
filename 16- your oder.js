function order(words) {
  let newArr = [];

  if (words.length == 0) return "";

  for (let i = 0; i < words.split(" ").length + 1; i++) {
    newArr[i] = words.split(" ").filter((e) => e.includes(i));
  }

  newArr.shift();
  return newArr.join(" ");
}

console.log(order(""));

// let arr = []
// arr[4] = 'test'

// console.log(arr)
