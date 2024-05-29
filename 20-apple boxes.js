function appleBoxes(k) {
  let [yellowApples, redApples] = [0, 0];
  for (let i = 1; i <= k; i++) {
    if (i % 2 !== 0) {
      yellowApples += i * i;
    } else {
      redApples += i * i;
    }
  }

  return redApples - yellowApples;
}

console.log(appleBoxes(5));
