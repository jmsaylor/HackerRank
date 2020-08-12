//epic: find the minimum number of bribes that have occured

//array elements will have the value of that person's original spot
//1 bribe equals one shift to the left
//max 2 bribes

//check each spot in line and compare original number to determine # of bribes
//if bribes > 2 return 'Too Chaotic'
//if < 2 accumulate bribe count
//return accumulation

function minimumBribes(q) {
  let totalBribes = 0;
  for (let x = 0; x < q.length; x++) {
    const bribes = x + 1 - q[x];
    if (bribes < -2) {
      return "Too chaotic";
    } else if (bribes < 0) {
      totalBribes += -1 * bribes;
    }
  }
  return totalBribes;
}

console.log(minimumBribes([1, 3, 5, 2, 4]));

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
