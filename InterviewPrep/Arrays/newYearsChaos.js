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
  let totalBribes = 0;
  for (let x = 0; x < q.length; x++) {
    const bribes = x + 1 - q[x];
    if (bribes < -2) {
      console.log("Too chaotic");
      return;
    } else if (bribes < 0) {
      totalBribes += -1 * bribes;
    }
  }
  if (q[q.length - 1] < q[q.length - 2] && q[q.length - 3] === q.length) {
    totalBribes++;
  }
  console.log(totalBribes);
}

minimumBribes([1, 3, 5, 2, 4]);

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
