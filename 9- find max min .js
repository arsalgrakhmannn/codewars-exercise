// var min = function (list) {
//   return list[0];
// };

// var max = function (list) {
//   return list[0];
// };

// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// let mixNumber = [3, 1, 6, 7, 4, 5];
// bblSort(mixNumber);

// function bblSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // If the condition is true
//         // then swap them
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   console.log(arr);
// }

// let reversedArr = [3, 1, 2, 6];
// const revers = (reversedArr) => {
//   let res = reversedArr[0];

//   for (let i = 1; i < reversedArr.length; i++) {
//     if (reversedArr[i] > res) {
//       res = reversedArr[i];
//     }
//   }

//   console.log(res);
// };

// revers(reversedArr);

let arr = ["udin", "budi", "ucok"];

let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

console.log(arr);
