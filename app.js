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
  console.log(row);
}
