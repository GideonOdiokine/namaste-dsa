let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j < i + 1; j++) {
//         row = row + i;
//     }
//     console.log(row);
// }

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  // console.log(row);
}

for (let i = n - 1; i >= 0; i--) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  //   console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  //   console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += "*";
  }
  //   console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";

  for (let k = 0; k < n - i - 1; k++) {
    row += " ";
  }

  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  //   console.log(row);
}

// Write a programme to print this
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

// Here is my solution
for (let i = 0; i < n; i++) {
  let row = "";
  let flip = 1;
  for (let j = 0; j <= i; j++) {
    row = row + flip;

    if (flip === 1) {
      flip = 0;
    } else {
      flip = 1;
    }
  }
  //   console.log(row)
}

// 1
// 01
// 010
// 1010
// 10101

let flip = 1;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + flip;

    if (flip === 1) {
      flip = 0;
    } else {
      flip = 1;
    }
  }
  //   console.log(row);
}

// Length of Last Word
// Strings
// Use In-Built Method solution
// var lengthOfLastWord=(s)=>{
//   s= s.trim();
//   s= s.split(' ');
//   return s[s.length - 1].length;
// }

// Now using a different approach;
// var lengthOfLastWord = (s) => {
//   // Trim all the spaces at the end
//   let n = s.length - 1;
//   let count = 0;

//   while (n >= 0) {
//     if (s[n] === " ") {
//       --n;
//     } else {
//       break;
//     }
//   }

//   // Count the character till u reach a space;
//   while (n >= 0) {
//     if (s[n] !== " ") {
//         n--
//       count++;
//     } else {
//       break;
//     }
//   }
//   return count;
// };

var lengthOfLastWord = (s) => {
  let n = s.length - 1;
  //   loop through space
  while (n >= 0 && s[n] === " ") {
    n--;
  }
  //   keep count of the last word;
  let count = 0;
  while (n >= 0 && s[n] !== " ") {
    n--;
    count++;
  }
  return count;
};
// "How are you doing -----"
// console.log(lengthOfLastWord("Hello world  sentence   "));

// Insertion sort

let arr = [10, 8, 6, 4, 1, 2, 7];

for (let i = 1; i < arr.length; i++) {
  let curr = arr[i];
  let prev = i - 1;

  while (arr[prev] > curr && prev >= 0) {
    arr[prev + 1] = arr[prev];
    prev--;
  }
  arr[prev + 1] = curr;
}
console.log(arr);
