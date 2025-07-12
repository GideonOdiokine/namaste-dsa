// Sum of first n numbers

// function sum(n) {
//   if (n == 0) return 0;
//   return n + sum(n - 1);
// }

// console.log(sum(5));

// sum of all elements in an array
let arr = [5, 3, 2, 0, 1];
function sumArry(n) {
  if (n == 0) {
    return arr[n];
  }
  return arr[n] + sumArry(n - 1);
}


// Exercise
function sumOddNumber(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) {
    if (isOdd) {
      return arr[n];
    } else return 0;
  }

  if (isOdd) {
    return arr[n] + sumOddNumber(n - 1);
  } else {
    return 0 + sumOddNumber(n - 1);
  }
}

// here is the tracing base on my understanding;
// sumArry(4)
//  arr(4) + sumArry(4 - 1) => 1 + sumArry(3);
//  sumArry(3) => 0 + sumArry(2)
// sumArry(2)=> 2 + sumArry(1)
// sumArry(1) => 3 + sumArry(0)
// sumArry(0)=> 5
// result => 1 + 0 + 2+ 3+ 5

console.log(sumOddNumber(arr.length - 1));
