// Sum of first n numbers

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(5));

// sum of all elements in an array
let arr = [5, 3, 1, 2, 4];
function sumArry(n) {
  if (n == 0) {
    return arr[n];
  }
  return arr[n] + sumArry(arr[n] - 1);

}

console.log(sumArry(arr.length - 1));
