//epic: 'rotate' the string d times and return it

// a = array
// d = number or rotations

//take one element from beginning of array and put it on end
//do that d times
//return

function rotLeft(a, d) {
  for (let x = 0; x < d; x++) {
    const first = a.shift();
    a.push(first);
  }

  return a;
}

console.log(rotLeft([3, 5, 4, 4], 2));
