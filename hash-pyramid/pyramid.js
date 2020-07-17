const staircase = (n) => {
  let arr = [];

  for (let x = 0; x < n; x++) {
    arr.push(" ");
  }
  // Now we have an array of n with spaces

  for (x = n; x >= 0; x--) {
    arr[x] = "#";
    console.log(arr.join(""));
  }
};

staircase(100);
