const sortArray = (array) => {
  let oddArraySorted = array.filter((e) => e % 2 !== 0).sort((a, b) => a - b);
  let indexArr = 0;

  for (let i = 0; i < array.length; i++) {
    let iteration = 0;
    if (array[i] % 2 != 0) {
      while (iteration < 1) {
        array[i] = oddArraySorted[indexArr];
        indexArr++;
        iteration++;
      }
    }
  }

  return array;
};

// sort the odd numbers only
console.log(sortArray([5, 4, 6, 7, 3, 4, 1]));
