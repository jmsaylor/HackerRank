//epic: find the minimum number of bribes that have occured

//array elements will have the value of that person's original spot
//1 bribe equals one shift to the left
//max 2 bribes

//[1,2,5,3,4] = 2 bribes

//check each spot in line and compare original number to determine # of bribes
//if bribes > 2 return 'Too chaotic'
//if < 2 accumulate bribe count
//return accumulation

function minimumBribes(q) {
  let chaos = false;

  q.forEach((element, index) => {
    if (index + 1 - element < -2) {
      chaos = true;
    }
  });

  if (chaos) {
    console.log("Too chaotic");
    return;
  }

  let swapCount = 0;

  for (let i = 0; i < q.length; i++) {
    for (let j = 0; j < q.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (q[j] > q[j + 1]) {
        //destructuring
        [q[j], q[j + 1]] = [q[j + 1], q[j]];
        // console.log(a);
        swapCount++;
      }
    }
  }
  //   console.log(swapCount);
}

// countSwaps([1, 3, 5, 2, 4]);
// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
// countSwaps([1, 2, 5, 3, 7, 8, 6, 4]);

function countSwaps(a) {
  let swapCount = 0;

  console.log(swapCount);
  console.log(a);

  const n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        //destructuring
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        // console.log(a);
        swapCount++;
        console.log(swapCount);
        console.log(a);
      }
    }
  }
  return swapCount;
}

function minimumBribes2(q) {
  let bribeCount,
    bribeLevel = 0;
  for (let i = q.length - 1; i > -1; i--) {
    bribeLevel = i + 1 - q[i];
    if (bribeLevel < -2) {
      console.log("Too chaotic");
      return;
    } else if (bribeLevel < 0) {
      //   console.log(bribeLevel)
      bribeLevel = Math.abs(bribeLevel);
      bribeCount += bribeLevel;
    }
  }
  console.log(q);
}
//   console.log(swapCount);

// minimumBribes2([1, 3, 5, 2, 4]);

// [1, 2, 3, 4, 5, 6, 7, 8][(1, 2, 5, 3, 7, 8, 6, 4)];
