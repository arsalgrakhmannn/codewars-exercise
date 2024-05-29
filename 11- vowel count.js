function getCount(str) {
  let count = 0;
  str
    .split("")
    .map((el) =>
      el == "a" || el == "i" || el == "u" || el == "e" || el == "o"
        ? (count += 1)
        : (count += 0)
    );

  return count;
}

console.log(getCount("abracadabrai"));
