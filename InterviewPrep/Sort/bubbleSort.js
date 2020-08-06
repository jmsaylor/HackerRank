function countSwaps(a) {
  let swapCount = 0;

  // console.log(a);

  const n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        //destructuring
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        // console.log(a);
        swapCount++;
      }
    }
  }

  console.log(`Array is sorted in ${swapCount} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}

const test = [5, 1, 3, 2, 2, 4, 2];

countSwaps(test);
